"use client";

import Link from "next/link";
import Image from "next/image"
import Logo from "@/app/images/rolo-img.png"
import { CircleHelp } from "lucide-react"


import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";


function resolveHref(linkHandle: any): string {
  if (!linkHandle) return "#";

  if (typeof linkHandle === "string") {
    return linkHandle.startsWith("/") ? linkHandle : `/${linkHandle}`;
  }

  if (Array.isArray(linkHandle)) return resolveHref(linkHandle[0]);

  if (linkHandle.url) {
    try {
      const url = new URL(linkHandle.url);
      return url.pathname + url.search + url.hash;
    } catch {
      return linkHandle.url;
    }
  }

  if (linkHandle.uri) return `/${linkHandle.uri}`;

  return "#";
}

type NavItem = {
  id?: string | number;
  title: string;
  linkHandle?: unknown;
  children?: NavItem[];
};

export default function TopNav({ items = [] }: { items?: NavItem[] }) {
  return (
    <nav>
      <div>
        <div className="container mx-auto">
          <NavigationMenu className="py-2">
            <NavigationMenuList>
        
              <Link href="/">
                <Image className="w-[40px] rounded-full" src={Logo} alt="Logo" />
              </Link>
                
              {items.map((item, index) => {
                const href = resolveHref(item.linkHandle);
                console.log("nav item", item.title, item.linkHandle, href);
                const key = item.id ?? `nav-${index}`;

                if (!item.children?.length) {
                  return (
                    <NavigationMenuItem key={key}>
                      <NavigationMenuLink asChild
                        className={navigationMenuTriggerStyle()}
                      >
                        <Link href={href}>
                          {item.title}
                        </Link>
                      </NavigationMenuLink>
                    </NavigationMenuItem>
                  );
                }

                return (
                  <NavigationMenuItem key={key}>
                    <NavigationMenuTrigger>{item.title}</NavigationMenuTrigger>

                    <NavigationMenuContent>
                      <ul className="grid min-w-[220px] gap-1 p-2">
                        {item.children.map((child, childIndex) => {
                          const childHref = resolveHref(child.linkHandle);
                          const childKey = child.id ?? `${key}-child-${childIndex}`;

                          return (
                            <li key={childKey}>
                              <NavigationMenuLink>
                                <Link href={childHref}>
                                  {child.title}
                                </Link>
                              </NavigationMenuLink>
                            </li>
                          );
                        })}
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                );
              })}
              <div className="flex">
                <CircleHelp className="h-[30px]" />
              </div>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </div>
    </nav>
  );
}