"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "@/app/images/rolo-img.png";
import { resolveHref } from "@/app/lib/resolveHref";

import {
  CircleHelp,
  Globe,
  CircleUserRound,
} from "lucide-react";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";



type NavImage = {
  url: string;
};

type NavChild = {
  title?: string;
  id?: number | string;
  linkHandle?: LinkHandle;
  image?: NavImage[];
  children?: NavChild[];
};

type NavItem = {
  title?: string;
  id?: number | string;
  linkHandle?: LinkHandle;
  image?: NavImage[];
  children?: NavChild[];
};

type TopNavProps = {
  items: NavItem[];
  debugKeepOpen?: boolean;
  defaultOpenItem?: string;
};

//component accepts prop called items which is the NavItem structure
export default function TopNav({ items, debugKeepOpen = false, defaultOpenItem = "", }: TopNavProps) {
  //stores the key of the open state "" means nothing is open
  const [openItem, setOpenItem] = React.useState<string>(defaultOpenItem);
  // points to nav wrapper in the dom for clickoutside
  const navRef = React.useRef<HTMLDivElement | null>(null);
  //stores a timer id for smoother hover
  const closeTimeout = React.useRef<NodeJS.Timeout | null>(null);
  //finds the current open item from the nav
  const activeItem = items.find(
    (item, index) => String(item.id ?? `nav-${index}`) === openItem
  );


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
    if (debugKeepOpen) return;

    clearCloseTimeout();
    closeTimeout.current = setTimeout(() => {
      setOpenItem("");
    }, 120);
  }, [clearCloseTimeout, debugKeepOpen]);
// cancels any pending close, without the timeout for events that don't need the hover like closing the X icon, drop down link, click outside
  const closeMenuImmediately = React.useCallback(() => {
    if (debugKeepOpen) return;
    
    clearCloseTimeout();
    setOpenItem("");
  }, [clearCloseTimeout, debugKeepOpen]);

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

  const hasImageLinks = activeItem?.children.some((child) => (child.image?.length ?? 0) > 0);

  // has items on child 
  const ImageHasChildren = activeItem?.children.some((child) => child.image?.[0]?.url);


  //navref detects click outside
  return (
    <div ref={navRef} className="relative border-b bg-background">
      {/* START visabile nav bar */}
      <div
        className="mx-auto flex w-full container items-center justify-between px-4 py-3"
        //stops pending close
        onMouseEnter={clearCloseTimeout}
        //starts delayed close COMMENT OUT FOR DEV DEBUGGING
        onMouseLeave={closeMenu} 
      >
        <Link href="/" className="shrink-0">
            <Image  onClick={closeMenuImmediately} className="w-[30px] rounded-full" src={Logo} alt="Logo" />
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
                const href = resolveHref(item.linkHandle) || "#";
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
        onMouseLeave={closeMenu}
      >
        <div
          className={`border-t bg-background shadow-lg transition-all duration-200 ease-out ${
            activeItem?.children?.length
              ? "translate-y-0 opacity-100"
              : "-translate-y-2 opacity-0"
          }`}
        >
          <div className="mx-auto w-full px-4 py-8 font-medium text-[14px] min-h-[200px]">
            
            <div className={`mx-auto flex w-full max-w-7xl items-center ${ImageHasChildren ? "justify-center" : ""}`}>
            {/* Column with images  */}
            {ImageHasChildren && (
              <ul className={textChildren.length > 0 ? "flex gap-8 flex-wrap w-1/2" : "flex gap-8 flex-wrap max-w-[800px]"}>
                {imageChildren.map((child, childIndex) => {
                  const asset = child.image?.[0];
                  const link = child.linkHandle;
                  const href = resolveHref(child.linkHandle) || "#";
                  const childKey = child.id ?? `image-child-${childIndex}`;

                  if (!asset?.url) return null;

                  return (
                    <li onClick={closeMenuImmediately} key={childKey}>
                      {link ? (
                        <Link className="flex flex-col items-center group" href={href}>
                          <div className="h-[100px]">
                            <Image
                              src={asset.url}
                              alt={child.title || "Navigation image"}
                              width={100}
                              className="w-full h-full object-cover"
                              height={100}
                              unoptimized
                            />
                          </div>
                          <span className="mt-4 underline-smooth lg:group-hover:border-current w-fit">{child.title}</span>
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
            {textChildren.length > 0 && (
            <ul className={ImageHasChildren ? "border-l border-gray-200 pl-8" : textChildren.length > 2 && hasNestedChildren ? "grid grid-cols-4 mx-auto gap-44" : "gap-44"}>
              {textChildren.map((child, childIndex) => {
                const link = child.linkHandle;
                const childKey = child.id ?? `link-child-${childIndex}`;
                const subChildren = child?.children ?? [];   
                const href = resolveHref(child.linkHandle);

                return (
                    <li className="mt-2" key={childKey}>
                      {link ? (
                        <Link className="underline-smooth w-fit" onClick={closeMenuImmediately} href={href}>{child.title}</Link>
                      ) : (
                        <>
                        <span className="text-gray-500 font-medium">{child.title}</span>

                        {subChildren.length > 0 && (
                          <ul className="mt-4">
                          {subChildren.map((subChild, subChildIndex) => {
                            //make key
                            const subChildKey = subChild.id ?? `link-child-${subChildIndex}`;
                            //make link
                            const subLink =
                              typeof subChild.linkHandle === "string"
                                ? subChild.linkHandle
                                : subChild.linkHandle?.url;

                            const href = resolveHref(subChild.linkHandle) || "#";

                            return (
                              <li className="mt-1 underline-smooth w-fit" key={subChildKey}>
                                { subLink ? (
                                  <Link onClick={closeMenuImmediately} href={href}>{subChild.title}</Link>
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
            )}
           </div>
          


            
          
          </div>
        </div>
      </div>
    </div>
  );
}