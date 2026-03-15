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
      { title: "Tea", href: "/tea", id: 5 },
      { title: "Careers", href: "/careers", id: 6 },
    ],
  },
  { title: "Contact", href: "/contact", id: 7 },
];

export default function TopNavTest() {
  const [openItem, setOpenItem] = React.useState<string>("");
  // Look through navItems and find the one whose id matches openItem
  const activeItem = navItems.find((item) => String(item.id) === openItem);

  return (
    <nav aria-label="main navigation" onMouseLeave={() => setOpenItem("")}>
      <ul>
        {/* map the nav items */}
        {navItems.map((item) => {
          // has childrn condition, !! means true or false, does the item have children? yes? give it me
          const hasChildren = !!item.children?.length;
          // assign uniqure key 
          const key = String(item.id);
            return (
              // return the link
              <li key={item.id}
              // if has children assign the open item the key
                onMouseEnter={() => {
                  if (hasChildren) {
                    setOpenItem(key);
                  }
                }}
              >
                {/* if it has children assign it a button if not leave it as a normal link */}
                { hasChildren ? (
                  <button>{item.title}</button>
                ) : (  
                  <a href={item.href}>{item.title}</a> 
                )}
              </li>
            )
        })}
      </ul>

      {/* render child links */}
      {/* activeItem?.children means if activeItem exists read activeItem.children without ?. it could crash  */}
       {/* && means if the left side displays true return the right side which is the data */}
      {activeItem?.children && (
        <div>
          <ul>
           {activeItem.children.map((child) => (
              <li key={child.id}><a href={child.href}>{child.title}</a></li>
           ))}
          </ul>
        </div>
      )}
     
    </nav>
  );
}