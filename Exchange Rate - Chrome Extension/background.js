let active_tab_id = 0;

chrome.tabs.onActivated.addListener(tab => {
    chrome.tabs.get(tab.tabId, current_tab_info => {
        active_tab_id = tab.tabId;

        if (/^https:\/\/www\.google/.test(current_tab_info.url)) {
            chrome.tabs.insertCSS(null, { file: './style.css' });
            chrome.tabs.executeScript(null, { file: './popup.js' }, () => console.log('i injected'))
        }
    });
});