type LinkHandle =
  | string
  | { url?: string; uri?: string }
  | LinkHandle[]
  | null
  | undefined;

// converts craft into url string magic
export function resolveHref(linkHandle: LinkHandle): string {
  if (!linkHandle) return "#";
  //if its "about" becomes "/about" if its "/about" stay "/about"
  if (typeof linkHandle === "string") {
    return linkHandle.startsWith("/") ? linkHandle : `/${linkHandle}`;
  }
  //if array return the first item
  if (Array.isArray(linkHandle)) return resolveHref(linkHandle[0]);
  // turns url into /about? instead of https://www.mel.com/about?
  if (linkHandle.url) {
    try {
      const url = new URL(linkHandle.url);
      return url.pathname + url.search + url.hash;
    } catch {
      return linkHandle.url;
    }
  }
  // if craft gives { uri: "about" } turn it into /about
  if (linkHandle.uri) return `/${linkHandle.uri}`;

  return "#";
}