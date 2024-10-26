import { StaticImageData } from "next/image";

import teamThumb_1 from "@/assets/img/team/1.webp";
import teamThumb_2 from "@/assets/img/team/2.webp";
import teamThumb_3 from "@/assets/img/team/3.webp";
import teamThumb_4 from "@/assets/img/team/4.webp";

interface DataType {
   id: number;
   page: string;
   img: StaticImageData;
   title: string;
   designation: string;
}[];

const team_data: DataType[] = [
   {
      id: 1,
      page: "home_1",
      img: teamThumb_1,
      title: "Karshin Kumar",
      designation: "Founder",
   },
   {
      id: 2,
      page: "home_1",
      img: teamThumb_2,
      title: "Macal Jonsons",
      designation: "Director",
   },
   {
      id: 3,
      page: "home_1",
      img: teamThumb_3,
      title: "Estoner William",
      designation: "HR",
   },
   {
      id: 4,
      page: "home_1",
      img: teamThumb_4,
      title: "Casses Tomas",
      designation: "IT Maneger",
   },

   // inner_page

   {
      id: 1,
      page: "inner_page",
      img: teamThumb_1,
      title: "Karshin Kumar",
      designation: "Founder",
   },
   {
      id: 2,
      page: "inner_page",
      img: teamThumb_2,
      title: "Macal Jonsons",
      designation: "Director",
   },
   {
      id: 3,
      page: "inner_page",
      img: teamThumb_3,
      title: "Estoner William",
      designation: "HR",
   },
   {
      id: 4,
      page: "inner_page",
      img: teamThumb_4,
      title: "Casses Tomas",
      designation: "IT Maneger",
   },
   {
      id: 5,
      page: "inner_page",
      img: teamThumb_1,
      title: "Karshin Kumar",
      designation: "Founder",
   },
   {
      id: 6,
      page: "inner_page",
      img: teamThumb_2,
      title: "Macal Jonsons",
      designation: "Director",
   },
   {
      id: 7,
      page: "inner_page",
      img: teamThumb_3,
      title: "Estoner William",
      designation: "HR",
   },
   {
      id: 8,
      page: "inner_page",
      img: teamThumb_4,
      title: "Casses Tomas",
      designation: "IT Maneger",
   },
]

export default team_data;