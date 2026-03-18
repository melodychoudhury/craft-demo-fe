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
  AlignJustify,
  ChevronRightIcon
} from "lucide-react";

type NavItem = {
  id?: string | number;
  title: string;
  linkHandle?: unknown;
  children?: NavItem[];
};

export default function MobileNav( { items = [] } : { items?:NavItem[] }) {
      const [openItem, setOpenItem] = React.useState(false);
      //make open state
      const openState = () => { setOpenItem (!openItem);}
      //stores the key of the mobile with children state "" means nothing is open
      const [mobileIsOpen, setMobileIsOpen] = React.useState<string>("");
      //Global close state
      const closeMenu = () => {
        setOpenItem(null);
        setMobileIsOpen("");
      };
      
        // points to nav wrapper in the dom for clickoutside
        const navRef = React.useRef<HTMLDivElement | null>(null);
        
    return (
        <>
            <div className="flex p-4 justify-between items-center relative border-b bg-background">
                <Link href="/" className="shrink-0">
                    <Image className="w-[30px] rounded-full" src={Logo} alt="Logo" />
                </Link>
                <button
                    type="button"
                    className="h-9"
                    onClick={openState}
                >
                    <AlignJustify />
                </button>
            </div>
            { /*drop down nav*/ }
            {openItem && (
                <div className="p-4 h-screen">
                    <ul ref={navRef}>
                        {items.map((item, index) => {
                            //get url
                            const href = resolveHref(item.linkHandle);
                            // mobile children
                            const mobileChildren = item.children;
                            // make each item unique 
                            const key = String(item.id ?? `mobile-item-${index}`)
                            // check if mobile is open
                            const isMobileOpen = mobileIsOpen === key;
                            return (
                                <li key={key}>
                                    {mobileChildren.length > 0 ? (
                                        <>
                                            <button className="flex justify-between w-full mb-4 font-medium" type="button" onClick={() => setMobileIsOpen(isMobileOpen ? null : key)}>
                                                {item.title} 
                                                <div className={isMobileOpen ? "rotate-90 transition-transform" : ""}>
                                                    <ChevronRightIcon />
                                                </div>
                                            </button>
                                            
                                            {isMobileOpen && (
                                                <div className="flex flex-col">
                                                    {mobileChildren.map((child, childIndex) => {
                                                    const mobileChildKey = String(child.id ?? `mobile-child-${childIndex}`);
                                                    const childHref = resolveHref(child.linkHandle);

                                                    return <Link className="mb-4" onClick={closeMenu} key={mobileChildKey} href={childHref}>{child.title}</Link>;
                                                    })}
                                                </div>
                                            )}
                                        </>
                                        ) : (
                                            <Link href={href}>
                                                {item.title}
                                            </Link>
                                        )}
                                </li>
                            );
                        })}
                    </ul>
                </div>
            )}
        </>
    )
}




