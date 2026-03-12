"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "@/app/images/rolo-img.png";
import {
  CircleHelp,
  Globe,
  CircleUserRound,
  ChevronDown,
  X,
} from "lucide-react";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";


// converts craft into url string magic
function resolveHref(linkHandle: any): string {
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

// each type for ts
type NavItem = {
  id?: string | number;
  title: string;
  linkHandle?: unknown;
  children?: NavItem[];
};

//component accepts prop called items which is the NavItem structure
export default function TopNav({ items = [] }: { items?: NavItem[] }) {
  //stores the key of the open state "" means nothing is open
  const [openItem, setOpenItem] = React.useState<string>("");
  // points to nav wrapper in the dom for clickoutside
  const navRef = React.useRef<HTMLDivElement | null>(null);
  //stores a timer id for smoother hover
  const closeTimeout = React.useRef<NodeJS.Timeout | null>(null);
  //finds the current open item from the nav
  const activeItem = items.find(
    (item, index) => String(item.id ?? `nav-${index}`) === openItem
  );
  //cancels any delayed close
  const clearCloseTimeout = React.useCallback(() => {
    if (closeTimeout.current) {
      clearTimeout(closeTimeout.current);
      closeTimeout.current = null;
    }
  }, []);

  const openMenu = React.useCallback(
    (key: string) => {
      clearCloseTimeout();
      setOpenItem(key);
    },
    [clearCloseTimeout]
  );

  const closeMenu = React.useCallback(() => {
    clearCloseTimeout();
    closeTimeout.current = setTimeout(() => {
      setOpenItem("");
    }, 120);
  }, [clearCloseTimeout]);

  const closeMenuImmediately = React.useCallback(() => {
    clearCloseTimeout();
    setOpenItem("");
  }, [clearCloseTimeout]);

  React.useEffect(() => {
    function handlePointerDown(event: MouseEvent) {
      if (!navRef.current) return;
      if (!navRef.current.contains(event.target as Node)) {
        closeMenuImmediately();
      }
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        closeMenuImmediately();
      }
    }

    document.addEventListener("mousedown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("mousedown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [closeMenuImmediately]);

  React.useEffect(() => {
    return () => clearCloseTimeout();
  }, [clearCloseTimeout]);

  return (
    <div ref={navRef} className="relative border-b bg-background">
      <div
        className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 py-3"
        onMouseEnter={clearCloseTimeout}
        onMouseLeave={closeMenu}
      >
        <div className="flex items-center gap-6">
          <Link href="/" className="shrink-0">
            <Image className="w-[30px] rounded-full" src={Logo} alt="Logo" />
          </Link>

          <NavigationMenu
            value={openItem}
            onValueChange={setOpenItem}
            className="max-w-none"
          >
            <NavigationMenuList>
              {items.map((item, index) => {
                const href = resolveHref(item.linkHandle);
                const key = String(item.id ?? `nav-${index}`);
                const isOpen = openItem === key;

                if (!item.children?.length) {
                  return (
                    <NavigationMenuItem key={key}>
                      <NavigationMenuLink
                        asChild
                        className={navigationMenuTriggerStyle()}
                      >
                        <Link href={href}>{item.title}</Link>
                      </NavigationMenuLink>
                    </NavigationMenuItem>
                  );
                }

                return (
                  <NavigationMenuItem
                    key={key}
                    value={key}
                    onMouseEnter={() => openMenu(key)}
                  >
                    <button
                      type="button"
                      aria-label={`Toggle ${item.title} menu`}
                      aria-expanded={isOpen}
                      onClick={() => setOpenItem(isOpen ? "" : key)}
                      className={`${navigationMenuTriggerStyle()} flex items-center gap-1`}
                    >
                      <span>{item.title}</span>
                      <ChevronDown
                        className={`h-4 w-4 transition-transform duration-200 ${
                          isOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                  </NavigationMenuItem>
                );
              })}
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        <div className="flex items-center">
          <button
            type="button"
            className="inline-flex h-9 w-9 items-center justify-center rounded-md hover:bg-accent"
          >
            <CircleHelp />
          </button>

          <button
            type="button"
            className="inline-flex h-9 w-9 items-center justify-center rounded-md hover:bg-accent"
          >
            <Globe />
          </button>

          <button
            type="button"
            className="inline-flex h-9 w-9 items-center justify-center rounded-md hover:bg-accent"
          >
            <CircleUserRound />
          </button>
        </div>
      </div>

      <div
        className={`absolute left-0 top-full z-50 w-full ${
          activeItem?.children?.length
            ? "pointer-events-auto"
            : "pointer-events-none"
        }`}
        onMouseEnter={clearCloseTimeout}
        onMouseLeave={closeMenu}
      >
        <div
          className={`border-t bg-background shadow-lg transition-all duration-200 ease-out ${
            activeItem?.children?.length
              ? "translate-y-0 opacity-100"
              : "-translate-y-2 opacity-0"
          }`}
        >
          <div className="mx-auto w-full max-w-7xl px-6 py-6">
            <div className="mb-6 flex items-center justify-between">
              <h2 className="text-lg font-semibold">{activeItem?.title}</h2>

              <button
                type="button"
                aria-label="Close menu"
                onClick={closeMenuImmediately}
                className="inline-flex h-10 w-10 items-center justify-center rounded-md hover:bg-accent"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <ul className="grid grid-cols-3 gap-4">
              {activeItem?.children?.map((child, childIndex) => {
                const childHref = resolveHref(child.linkHandle);
                const childKey = child.id ?? `${openItem}-child-${childIndex}`;

                return (
                  <li key={childKey}>
                    <Link
                      href={childHref}
                      onClick={closeMenuImmediately}
                      className="flex min-h-[88px] items-center justify-center rounded-xl border px-4 py-6 text-center text-sm font-medium transition hover:bg-accent hover:text-accent-foreground"
                    >
                      {child.title}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}