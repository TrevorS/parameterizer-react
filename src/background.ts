import { Pattern } from "./models/pattern";
import { WebRequest } from "./models/web_request";

const patterns = [
  new Pattern("Test Pattern", "google.com", [ { key: "test", value: "test2" } ]),
];

const requestHandler = (webRequest: chrome.webRequest.ResourceRequest) => {
  const request = new WebRequest(webRequest);

  patterns.forEach((pattern) => {
    if (request.matches(pattern)) {
      const newURL = request.addQueryParameters(pattern);

      chrome.tabs.update(request.tabId, { url: newURL.href });
    }
  });
};

chrome.webRequest.onBeforeRequest.addListener(requestHandler,
  { urls: ["<all_urls>"] }, ["blocking"]);
