interface DataType {
  id: number;
  page: string;
  count?: string;
  icon?: string;
  title: string;
  desc: string;
}
[];

const work_data: DataType[] = [
  {
    id: 1,
    page: "home_1",
    count: "01",
    title: "Sourcing",
    desc: "We partner with trusted farmers to select high-quality, ethically sourced coffee beans.",
  },
  {
    id: 2,
    page: "home_1",
    count: "02",
    title: "Processing",
    desc: "Our beans undergo meticulous processing to enhance flavor and maintain quality.",
  },
  {
    id: 3,
    page: "home_1",
    count: "03",
    title: "Quality Control",
    desc: "We conduct thorough quality checks at every stage to guarantee our customers interest.",
  },
  {
    id: 4,
    page: "home_1",
    count: "04",
    title: "Exporting",
    desc: "Once approved, we efficiently package and export our premium coffee, delivering rich flavors.",
  },
];

export default work_data;
