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
  // layout variables
  // has items on child 
  const ImageHasChildren = activeItem?.children.some((child) => child.image?.[0]?.url);

  //cancels any delayed close for hover state
  const clearCloseTimeout = React.useCallback(() => {
    if (closeTimeout.current) {
      clearTimeout(closeTimeout.current);
      closeTimeout.current = null;
    }
  }, []);
  //  cancels any pending close then sets new open item, when the user moves from one parent to another a new one opens cleanly
  const openMenu = React.useCallback(
    (key: string) => {
      clearCloseTimeout();
      setOpenItem(key);
    },
    [clearCloseTimeout]
  );
  // cancels any pending close and then sets a pause for the over stateto prevent glitching on the ui
  const closeMenu = React.useCallback(() => {
    clearCloseTimeout();
    closeTimeout.current = setTimeout(() => {
      setOpenItem("");
    }, 120);
  }, [clearCloseTimeout]);
// cancels any pending close, without the timeout for events that don't need the hover like closing the X icon, drop down link, click outside
  const closeMenuImmediately = React.useCallback(() => {
    clearCloseTimeout();
    setOpenItem("");
  }, [clearCloseTimeout]);

  //start of outside click and escape handling
  React.useEffect(() => {
    function handlePointerDown(event: MouseEvent) {
      if (!navRef.current) return;
      // outside click, if the target is not in the nav wrapper close
      if (!navRef.current.contains(event.target as Node)) {
        closeMenuImmediately();
      }
    }

    function handleKeyDown(event: KeyboardEvent) {
      //pressing escape will close the menu immediatley
      if (event.key === "Escape") {
        closeMenuImmediately();
      }
    }

    document.addEventListener("mousedown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      //removes the event listeners with component unmounts to avoid memory leaks and event handlers
      document.removeEventListener("mousedown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [closeMenuImmediately]);
 //end of outside click and escape handling

 //clean up for the timer
  React.useEffect(() => {
    return () => clearCloseTimeout();
  }, [clearCloseTimeout]);

  //for the hover nav 
  const imageChildren =
    activeItem?.children?.filter((child) => child.image?.length) ?? [];

  const textChildren =
    activeItem?.children?.filter((child) => !child.image?.length) ?? [];




  const hasNestedChildren = activeItem?.children?.some((child) => (child.children?.length ?? 0) > 0);


  //add console log here


  //navref detects click outside
  return (
    <div ref={navRef} className="relative border-b bg-background">
      {/* START visabile nav bar */}
      <div
        className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 py-3"
        //stops pending close
        onMouseEnter={clearCloseTimeout}
        //starts delayed close
        //onMouseLeave={closeMenu}
      >
        <Link href="/" className="shrink-0">
            <Image className="w-[30px] rounded-full" src={Logo} alt="Logo" />
        </Link>
        <div className="flex items-center gap-8">
          {/* Open item is reacts state */}
          <NavigationMenu
            value={openItem}
            onValueChange={setOpenItem}
            className="max-w-none"
          >
            <NavigationMenuList>
              {items.map((item, index) => {
                //gets url string
                const href = resolveHref(item.linkHandle);
                // makes each item unique 
                const key = String(item.id ?? `nav-${index}`);
                // used key to check whether the item is the active open one
                const isOpen = openItem === key;
                // LINKS WITHOUT CHILDREN
                if (!item.children?.length) {
                  return (
                    <NavigationMenuItem key={key}>
                      <NavigationMenuLink
                        asChild
                        //standard shadcn trigger styles to match the ui
                        className={navigationMenuTriggerStyle()}
                        onClick={closeMenuImmediately}
                      >
                        <Link href={href}>{item.title}</Link>
                      </NavigationMenuLink>
                    </NavigationMenuItem>
                  );
                }

                return (
                  <NavigationMenuItem
                  //LINKS WITH CHILDREN
                  // if item does have children it becomes a menu trigger
                    key={key}
                    value={key}
                    // links the item with a controlled menu value
                    onMouseEnter={() => openMenu(key)}
                  >
                    {/* On the chevron it tells screen readers which menu is open and if its expanded */}
                    <button
                      type="button"
                      aria-label={`Toggle ${item.title} menu`}
                      aria-expanded={isOpen}
                      // if already open click closes it
                      onClick={() => setOpenItem(isOpen ? "" : key)}
                      // Shadcn ui style
                      className={`${navigationMenuTriggerStyle()} flex items-center gap-1`}
                    >
                      <span>{item.title}</span>
                      {/* <ChevronDown
                        className={`h-4 w-4 transition-transform duration-200 ${
                          isOpen ? "rotate-180" : ""
                        }`}
                      /> */}
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
      {/* END visabile nav bar */}
      <div
        className={`absolute left-0 top-full z-50 w-full ${
          //if its the active item and has children do these classes auto recieve mouse events, none it blocks clicks for content under it
          activeItem?.children?.length
            ? "pointer-events-auto"
            : "pointer-events-none"
        }`}
        // clear the timer when mouse enters, 
        onMouseEnter={clearCloseTimeout}
        // close menu when mouse leaves DEVMODE - COMMENT OUT TO REMOVE HOVER
        // onMouseLeave={closeMenu}
      >
        <div
          className={`border-t bg-background shadow-lg transition-all duration-200 ease-out ${
            activeItem?.children?.length
              ? "translate-y-0 opacity-100"
              : "-translate-y-2 opacity-0"
          }`}
        >
          <div className="mx-auto w-full py-8 font-medium text-[14px] min-h-[200px]">
            
            <div className={`mx-auto flex w-full max-w-7xl items-center ${ImageHasChildren ? "justify-center" : ""}`}>
            {/* Column with images  */}
            {ImageHasChildren && (
              <ul className="flex gap-8 flex-wrap w-1/2">
                {imageChildren.map((child, childIndex) => {
                  const asset = child.image?.[0];
                  const link = child.linkHandle;
                  const childKey = child.id ?? `image-child-${childIndex}`;

                  if (!asset?.url) return null;

                  return (
                    <li onClick={closeMenuImmediately} key={childKey}>
                      {link ? (
                        <Link className="flex flex-col items-center" href={link}>
                          <Image
                            src={asset.url}
                            alt={child.title || "Navigation image"}
                            width={100}
                            height={100}
                            unoptimized
                          />
                          <span className="mt-4">{child.title}</span>
                        </Link>
                      ) : (
                        <div className="flex flex-col items-center">
                          <Image
                              src={asset.url}
                              alt={child.title || "Navigation image"}
                              width={100}
                              height={100}
                              unoptimized
                            />
                            <span className="mt-4">{child.title}</span>
                        </div>  
                      )}
                    </li>
                  );
                })}
              </ul>
            )
            }

            {/* Column without images  */}

            <ul className={ImageHasChildren ? "border-l border-gray-200 pl-8" : textChildren.length > 2 ? "grid grid-cols-4 mx-auto gap-44" : "gap-44"}>
              {textChildren.map((child, childIndex) => {
                const link = child.linkHandle;
                const childKey = child.id ?? `link-child-${childIndex}`;
                const subChildren = child?.children ?? [];   

                return (
                    <li className="mt-2" key={childKey}>
                      {link ? (
                        <Link className="underline-smooth w-fit" onClick={closeMenuImmediately} href={link}>{child.title}</Link>
                      ) : (
                        <>
                        <span>{child.title}</span>

                        {subChildren.length > 0 && (
                          <ul>
                          {subChildren.map((subChild, subChildIndex) => {
                            //make key
                            const subChildKey = subChild.id ?? `link-child-${subChildIndex}`;
                            //make link
                            const subLink = subChild.linkHandle.url || subChild.linkHandle;

                            return (
                              <li key={subChildKey}>
                                { subLink ? (
                                  <Link href={subLink}>{subChild.title}</Link>
                                ) : (
                                  <span>{subChild.title}</span>
                                )
                                }
                              </li>
                            );
                          })}
                          </ul>
                        )}

                      </>
                      )}
                    </li>
                );
              })}
            </ul>  
           </div>
          


            
          
          </div>
        </div>
      </div>
    </div>
  );
}