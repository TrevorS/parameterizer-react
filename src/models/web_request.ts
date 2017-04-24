import { Pattern } from "./pattern";

interface IFixedURL extends URL {
  searchParams: URLSearchParams;
}

class WebRequest {
  private static mainFrame: string = "main_frame";

  private request: chrome.webRequest.ResourceRequest;
  private url: IFixedURL;
  private searchParams: URLSearchParams;

  constructor(request: chrome.webRequest.ResourceRequest) {
    this.request = request;

    this.url = new URL(request.url) as IFixedURL;
    this.searchParams = this.url.searchParams;
  }

  get tabId() {
    return this.request.tabId;
  }

  public matches({ regex, queryParameters }: Pattern): boolean {
    return this.url.href.match(regex) &&
           this.fromMainFrame() &&
           this.requiresModification(queryParameters);
  }

  public addQueryParameters({ queryParameters }: Pattern): IFixedURL {
    const newURL = new URL(this.url.href) as IFixedURL;

    queryParameters.forEach(({ key, value }) => {
      if (!newURL.searchParams.has(key)) {
        newURL.searchParams.set(key, value);
      }
    });

    return newURL;
  }

  private fromMainFrame(): boolean {
    return this.request.type === WebRequest.mainFrame;
  }

  private requiresModification(queryParameters): boolean {
    return queryParameters.reduce((match, { key }) =>
      match || !this.searchParams.has(key), false);
  }
}

export { WebRequest, IFixedURL };
