"use client";
import * as React from "react";

const navItems = [
  { title: "Home", href: "/", id: 0 },
  {
    title: "Services",
    id: 1,
    children: [
      { title: "Design", href: "/design", id: 2 },
      { title: "Development", href: "/development", id: 3 },
    ],
  },
  {
    title: "About",
    id: 4,
    children: [
      { title: "tea", href: "/tea", id: 5 },
      { title: "careers", href: "/careers", id: 6 },
    ],
  },
  { title: "Contact", href: "/contact", id: 7 },
];

export default function TopNavTest() {
  const [openItem, setOpenItem] = React.useState<string>("");
  const closeTimeout = React.useRef<NodeJS.Timeout | null>(null);

  const activeItem = navItems.find(
    (item, index) => String(item.id ?? `nav-${index}`) === openItem
  );

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
    return () => clearCloseTimeout();
  }, [clearCloseTimeout]);

  return (
    <nav
      aria-label="main navigation"
    >
      <ul>
        {navItems.map((item, index) => {
          
          return (
            <li>    
                <button type="button">
                  {item.title} V
                </button>
                <a href={item.href}>{item.title}</a>
            </li>
          );
        })}
      </ul>

      <div
        className="bg-[red]"
      >
        <h2>Magic nav</h2>
      </div>
    </nav>
  );
}