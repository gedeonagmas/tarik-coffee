interface DataType {
  type: string;
  subTitle: string;
  title: string;
  description: string;
  detailTitleOne: string;
  detailDescriptionOne: string;
  detailTitleTwo: string;
  detailDescriptionTwo: string;
}
[];

const ChooseUsData: DataType[] = [
  {
    type: "home",
    subTitle: "Why Choose Us",
    title: "We bring our vision to life, from start to end.",
    description:
      "Tarik Coffee delivers premium, ethically sourced beans with a commitment to quality and sustainability.",
    detailTitleOne: "Unlimited Quality",
    detailDescriptionOne:
      "We carefully source premium coffee beans from trusted farms, ensuring every batch meets our high standards.",
    detailTitleTwo: "Global Expertise",
    detailDescriptionTwo:
      "With a commitment to excellence, we deliver rich, flavorful coffee to markets worldwide.",
  },

  {
    type: "service",
    subTitle: "Our Services",
    title: "High Quality Coffee Sourcing and Exports.",
    description:
      "Providing premium, ethically sourced coffee beans for international coffee lovers.",
    detailTitleOne: "Direct Sourcing",
    detailDescriptionOne:
      "We work directly with farmers to ensure quality and fair pricing for our beans.",
    detailTitleTwo: "Custom Blends",
    detailDescriptionTwo:
      "Tailored coffee blends to meet specific taste preferences and regional requirements.",
  },

  {
    type: "product",
    subTitle: "Our Products",
    title: "Exquisite Coffee Beans, Freshly Harvested from Premium Regions.",
    description:
      "Delivering rich, aromatic coffee beans carefully sourced from top global regions.",
    detailTitleOne: "Arabica Beans",
    detailDescriptionOne:
      "Known for their smooth flavor, our Arabica beans are grown in high altitudes.",
    detailTitleTwo: "Yirgacheffee Beans",
    detailDescriptionTwo:
      "Offering a strong, bold flavor, our Yirgacheffee beans are perfect for espresso lovers.",
  },

  {
    type: "team",
    subTitle: "Our Teams",
    title:
      "Passionate Team Committed to Exceptional Coffee Quality and Service.",
    description:
      "Our experienced team brings dedication and expertise to every step of coffee export.",
    detailTitleOne: "Coffee Experts",
    detailDescriptionOne:
      "Skilled in sourcing, roasting, and tasting to deliver only the best coffee beans.",
    detailTitleTwo: "Customer Success",
    detailDescriptionTwo:
      "Ensuring seamless service and satisfaction for our clients around the world.",
  },
  {
    type: "blog",
    subTitle: "Our Blogs",
    title: "Insights on Coffee Culture, Sourcing, and Brewing Techniques.",
    description:
      "Discover trends, expert tips, and stories behind our coffee journey.",
    detailTitleOne: "Coffee Origins",
    detailDescriptionOne:
      "Explore the unique characteristics of coffee from different regions worldwide.",
    detailTitleTwo: "Brewing Tips",
    detailDescriptionTwo:
      "Learn professional techniques to brew the perfect cup every time.",
  },
];

export default ChooseUsData;
