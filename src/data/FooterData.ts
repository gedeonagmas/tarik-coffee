interface DataType {
  id: number;
  title: string;
  nav_links: {
    link: string;
    title: string;
  }[];
}
[];

const footer_data: DataType[] = [
  {
    id: 1,
    title: "Service",
    nav_links: [
      { link: "service", title: "Exporting" },
      { link: "product", title: "Processing" },
      { link: "service", title: "Packaging" },
      { link: "product", title: "Deliver" },
    ],
  },
  {
    id: 2,
    title: "Useful link",
    nav_links: [
      { link: "about", title: "About Us" },
      { link: "product", title: "Product" },
      { link: "service", title: "Service" },
      { link: "contact", title: "Contact Us" },
    ],
  },
];

export default footer_data;
