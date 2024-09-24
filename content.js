(async () => {
    chrome.runtime.onMessage.addListener((obj, sender, response) => {
        const { type } = obj;
        if (type === 'LOADED') {
            setTimeout(() => {
                let chat = document.body;
                if (chat) {
                    initChat(chat);
                }
            }, 200);
        }
    });

    const initChat = (chat) => {
        let sendBtn = chat.querySelector('button[data-testid="send-button"]')
		let stopBtn = chat.querySelector('button[data-testid="stop-button"]')
        const searchBox = sendBtn.parentElement.parentElement || stopBtn.parentElement.parentElement;

		// Create div for button
        const shortBtnDiv = document.createElement('div');
        shortBtnDiv.classList.add('min-w-8');

		// Create button
        const shortBtn = document.createElement('button');
        shortBtn.classList.add(
            'mb-1', 'me-1', 'flex', 'h-8', 'w-16', 'items-center', 'justify-center', 
            'rounded-full', 'bg-black', 'text-white', 'transition-colors',
            'hover:opacity-70', 'focus-visible:outline-none', 'focus-visible:outline-black', 
            'disabled:text-[#f4f4f4]', 'disabled:hover:opacity-100', 'dark:bg-white', 
            'dark:text-black', 'dark:focus-visible:outline-white', 'disabled:dark:bg-token-text-quaternary', 
            'dark:disabled:text-token-main-surface-secondary', 'disabled:bg-[#D7D7D7]'
        );
        shortBtn.style.fontSize = '.75rem';
        shortBtn.innerHTML = 'kürzer';

		// Append div and button
		searchBox.insertBefore(shortBtnDiv, searchBox.children[5]);
		shortBtnDiv.appendChild(shortBtn);

		// set input
		shortBtn.addEventListener('click', () => {
			const input = chat.querySelector('#prompt-textarea p');
            const text = 'kürzer';

            input.innerText = text;
        });
    }
})();