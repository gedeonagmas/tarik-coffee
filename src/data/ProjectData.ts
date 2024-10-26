import { StaticImageData } from "next/image";

import projectThumb_1 from "@/assets/img/project/1.webp";
import projectThumb_2 from "@/assets/img/project/2.webp";
import projectThumb_3 from "@/assets/img/project/3.webp";
import project2Thumb_1 from "@/assets/img/project/6.webp";

interface DataType {
  id: number;
  page: string;
  img: StaticImageData;
  title: string;
  desc?: string;
}
[];

const project_data: DataType[] = [
  {
    id: 1,
    page: "home_1",
    img: projectThumb_1,
    title: "Data solution",
  },
  {
    id: 2,
    page: "home_1",
    img: projectThumb_2,
    title: "It management",
  },
  {
    id: 3,
    page: "home_1",
    img: projectThumb_3,
    title: "Market research",
  },

  // home_2

  {
    id: 1,
    page: "home_2",
    img: project2Thumb_1,
    title: "Data solution",
    desc: "Maecenas tempus, tellus eget condi honcus sem quam semper libero.",
  },
  {
    id: 2,
    page: "home_2",
    img: project2Thumb_1,
    title: "It management",
    desc: "Maecenas tempus, tellus eget condi honcus sem quam semper libero.",
  },
  {
    id: 3,
    page: "home_2",
    img: project2Thumb_1,
    title: "Market research",
    desc: "Maecenas tempus, tellus eget condi honcus sem quam semper libero.",
  },
  {
    id: 4,
    page: "home_2",
    img: project2Thumb_1,
    title: "It management",
    desc: "Maecenas tempus, tellus eget condi honcus sem quam semper libero.",
  },
];

export default project_data;
