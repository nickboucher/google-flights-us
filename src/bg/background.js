
chrome.webRequest.onBeforeRequest.addListener(
  function(request) {
    console.log(request);
      if ((request.url.startsWith("https://www.google.com/travel/flights") ||
          request.url.startsWith("https://www.google.com/flights")) &&
          !request.url.includes("gl=US")) {
            if (request.url.includes("?")) {
              return { redirectUrl: request.url + "&gl=US" };
            } else {
              return { redirectUrl: request.url + "?gl=US" };
            }
      }
  },
  {urls: ["<all_urls>"]},
  ["blocking"]);