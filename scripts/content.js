function redirectShortsLinks() {
    if (window.location.pathname.startsWith('/shorts/')) {
        console.log("[YouTube Shorts Redirector] Detected link with shorts:" + window.location);
        const url=new URL(window.location.href);
        const redirectUrl=url.origin+url.pathname.replace('/shorts/', '/watch?v=');
        window.location.href = redirectUrl;
    }
}

redirectShortsLinks();

chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        if (request.message === 'tab_url_updated') {
            redirectShortsLinks();
        }
  });
