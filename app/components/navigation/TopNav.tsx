import Link from "next/link";

function resolveHref(linkHandle) {
  if (!linkHandle) return "";

  // plain text handle like "about" or "/about"
  if (typeof linkHandle === "string") {
    return linkHandle.startsWith("/") ? linkHandle : `/${linkHandle}`;
  }

  // entries/assets fields often return arrays
  if (Array.isArray(linkHandle)) return resolveHref(linkHandle[0]);

  // Link field shape (common)
  if (linkHandle.url) return linkHandle.url;

  // Entry target shape (common)
  if (linkHandle.uri) return `/${linkHandle.uri}`;

  return "#";
}

export default function TopNav({ items = [] }) {
  return (
    <nav>
      <ul className="flex items-center gap-4">
        <li>
          <Link href="/">Home</Link>
        </li>
        {items.map((item) => {
          const href = resolveHref(item.linkHandle);
          return (
            <li key={item.id}>
              <Link href={href}>{item.title}</Link>

              {item.children?.length ? (
                <ul>
                  {item.children.map((child) => {
                    const childHref = resolveHref(child.linkHandle);
                    return (
                      <li key={child.id}>
                        <Link href={childHref}>{child.title}</Link>
                      </li>
                    );
                  })}
                </ul>
              ) : null}
            </li>
          );
        })}
      </ul>
    </nav>
  );
}