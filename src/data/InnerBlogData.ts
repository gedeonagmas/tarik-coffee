import { StaticImageData } from "next/image";

import blogThumb_1 from "@/assets/img/blog/1.webp";
import blogThumb_2 from "@/assets/img/blog/2.webp";
import blogThumb_3 from "@/assets/img/blog/3.webp";

interface DataType {
   id: number;
   img?: StaticImageData;
   title: string;
   date: string;
   comment: number;
   video_btn?: boolean;
   carousel?: StaticImageData[];
   desc: string;
}[];

const inner_blog_data: DataType[] = [
   {
      id: 1,
      img: blogThumb_1,
      title: "Maecenas Tempus Dellus Eget Condim",
      date: "25 May 2021",
      comment: 22,
      desc: "actually choosing a strategy entails making decisions that explicitly cut off possibilities and options. An executive may well fear that getting those decisions wrong",
   },
   {
      id: 2,
      img: blogThumb_2,
      video_btn: true,
      title: "Maecenas Tempus Dellus Eget Condim",
      date: "25 May 2021",
      comment: 22,
      desc: "actually choosing a strategy entails making decisions that explicitly cut off possibilities and options. An executive may well fear that getting those decisions wrong",
   },
   {
      id: 3,
      carousel: [blogThumb_3, blogThumb_2, blogThumb_1],
      title: "Maecenas Tempus Dellus Eget Condim",
      date: "25 May 2021",
      comment: 22,
      desc: "actually choosing a strategy entails making decisions that explicitly cut off possibilities and options. An executive may well fear that getting those decisions wrong",
   },
   {
      id: 4,
      carousel: [blogThumb_3, blogThumb_2, blogThumb_1],
      title: "Maecenas Tempus Dellus Eget Condim",
      date: "25 May 2021",
      comment: 22,
      desc: "actually choosing a strategy entails making decisions that explicitly cut off possibilities and options. An executive may well fear that getting those decisions wrong",
   },
   {
      id: 5,
      img: blogThumb_2,
      video_btn: true,
      title: "Maecenas Tempus Dellus Eget Condim",
      date: "25 May 2021",
      comment: 22,
      desc: "actually choosing a strategy entails making decisions that explicitly cut off possibilities and options. An executive may well fear that getting those decisions wrong",
   },
   {
      id: 6,
      img: blogThumb_1,
      title: "Maecenas Tempus Dellus Eget Condim",
      date: "25 May 2021",
      comment: 22,
      desc: "actually choosing a strategy entails making decisions that explicitly cut off possibilities and options. An executive may well fear that getting those decisions wrong",
   },
   {
      id: 7,
      img: blogThumb_2,
      video_btn: true,
      title: "Maecenas Tempus Dellus Eget Condim",
      date: "25 May 2021",
      comment: 22,
      desc: "actually choosing a strategy entails making decisions that explicitly cut off possibilities and options. An executive may well fear that getting those decisions wrong",
   },
]

export default inner_blog_data;