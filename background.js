chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) =>
{
    const targetUrl = 'https://chatgpt.com';

    if (changeInfo.status === 'complete' && tab.url && tab.url.includes(targetUrl))
    {
        chrome.tabs.sendMessage(tabId, { type: 'LOADED' });
    } 
});