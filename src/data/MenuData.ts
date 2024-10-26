interface MenuItem {
  id: number;
  title: string;
  link: string;
  has_dropdown: boolean;
  sub_menus?: {
    link: string;
    title: string;
  }[];
}
[];

const menu_data: MenuItem[] = [
  {
    id: 1,
    has_dropdown: true,
    title: "Home",
    link: "/",
  },
  {
    id: 2,
    has_dropdown: true,
    title: "Service",
    link: "/service",
  },
  {
    id: 3,
    has_dropdown: true,
    title: "Product",
    link: "/product",
  },
  {
    id: 3,
    has_dropdown: true,
    title: "Team",
    link: "/team",
  },
  {
    id: 4,
    has_dropdown: true,
    title: "Blog ",
    link: "/blog",
  },
  {
    id: 5,
    has_dropdown: false,
    title: "Contact Us",
    link: "/contact",
  },
];
export default menu_data;
