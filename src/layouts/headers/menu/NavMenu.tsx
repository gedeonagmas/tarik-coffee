"use client";
import menu_data from "@/data/MenuData";
import Link from "next/link.js";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const NavMenu = () => {
  const currentRoute = usePathname();
  const [navTitle, setNavTitle] = useState("");

  const isMenuItemActive = (menuLink: string) => {
    return currentRoute === menuLink;
  };

  const isSubMenuItemActive = (subMenuLink: string) => {
    return currentRoute === subMenuLink;
  };

  //openMobileMenu
  const openMobileMenu = (menu: any) => {
    if (navTitle === menu) {
      setNavTitle("");
    } else {
      setNavTitle(menu);
    }
  };
  const [url, setUrl] = useState("");

  useEffect(() => {
    setUrl(window.location.pathname);
  }, []);

  console.log(url?.split("/")[1], menu_data, url);
  return (
    <>
      {menu_data.map((menu: any) => (
        <li
          key={menu.id}
          className={`${
            url?.split("/")[1] === menu?.link?.split("/")[1] ||
            (url === "/" && menu.title === "Home")
              ? "border-b-2"
              : ""
          } lg:hover:border-b-2 pt-1.5 h-10 border-indigo-700 `}
        >
          <Link
            href={menu.link}
            className={`${navTitle === menu.title ? "show" : ""}`}
            onClick={() => openMobileMenu(menu.title)}
          >
            {menu.title}
          </Link>
          {menu.has_dropdown && (
            <>
              <ul
                className={`sub-menu ${navTitle === menu.title ? "show" : ""}`}
              >
                {menu.sub_menus &&
                  menu.sub_menus.map((sub_m: any, i: any) => (
                    <li
                      key={i}
                      className={`${
                        sub_m.link && isSubMenuItemActive(sub_m.link)
                          ? "active"
                          : ""
                      }`}
                    >
                      <Link href={sub_m.link}>
                        <span>{sub_m.title}</span>
                      </Link>
                    </li>
                  ))}
              </ul>
            </>
          )}
        </li>
      ))}
    </>
  );
};

export default NavMenu;
