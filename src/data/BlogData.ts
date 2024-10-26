import { StaticImageData } from "next/image";

import blogThumb_1 from "@/assets/img/blog/5.webp";
import blogThumb_2 from "@/assets/img/blog/6.webp";
import blogThumb_3 from "@/assets/img/blog/7.webp";
import blogThumb_4 from "@/assets/img/blog/10.webp";
import blogThumb_5 from "@/assets/img/blog/11.webp";
import blogThumb_6 from "@/assets/img/blog/12.webp";
import blogThumb_7 from "@/assets/img/blog/8.webp";
import blogThumb_8 from "@/assets/img/blog/9.webp";

interface DataType {
   id: number;
   page: string;
   img: StaticImageData;
   date: string;
   comment?: number;
   title: string;
   desc?: string;
}[];

const blog_data: DataType[] = [
   {
      id: 1,
      page: "home_1",
      img: blogThumb_1,
      date: "25 May 2021",
      title: "Stock Exchange Market Foreca 2021-2023",
      desc: "Duis leo. Sed fringilla mauris iamet nibh. odales sagittis magonsequat letendum sodales augue velit",
   },
   {
      id: 2,
      page: "home_1",
      img: blogThumb_2,
      date: "25 May 2022",
      title: "Market Stock Exchange Foreca 2023-2023",
      desc: "Duis leo. Sed fringilla mauris iamet nibh. odales sagittis magonsequat letendum sodales augue velit",
   },
   {
      id: 3,
      page: "home_1",
      img: blogThumb_3,
      date: "30 May 2021",
      title: "Foreca Exchange Stock Market 2010-2023",
      desc: "Duis leo. Sed fringilla mauris iamet nibh. odales sagittis magonsequat letendum sodales augue velit",
   },

   // home_3

   {
      id: 1,
      page: "home_3",
      img: blogThumb_7,
      date: "25",
      comment: 55,
      title: "Stock Exchange Market Foreca 2021-2023",
      desc: "Duis leo. Sed fringilla mauris iamet nibh. odales sagittis magonsequat letendum sodales augue velit cursununc",
   },
   {
      id: 2,
      page: "home_3",
      img: blogThumb_8,
      date: "25",
      comment: 55,
      title: "Market Stock Exchange Foreca 2023-2023",
      desc: "Duis leo. Sed fringilla mauris iamet nibh. odales sagittis magonsequat letendum sodales augue velit cursununc",
   },

   // home_4

   {
      id: 1,
      page: "home_4",
      img: blogThumb_1,
      date: "02 January",
      title: "Publishing software like Aldus including versions",
   },
   {
      id: 2,
      page: "home_4",
      img: blogThumb_2,
      date: "02 January",
      title: "Publishing software like Aldus including versions",
   },
   {
      id: 3,
      page: "home_4",
      img: blogThumb_3,
      date: "02 January",
      title: "Publishing software like Aldus including versions",
   },

   // home_5

   {
      id: 1,
      page: "home_5",
      img: blogThumb_4,
      date: "25 May 2021",
      title: "Stock Exchange Market Foreca 2021-2023",
      desc: "Duis leo. Sed fringilla mauris iamet nibh. odales its augue velit",
   },
   {
      id: 2,
      page: "home_5",
      img: blogThumb_5,
      date: "25 May 2021",
      title: "Market Stock Exchange Foreca 2023-2023",
      desc: "Duis leo. Sed fringilla mauris iamet nibh. odales its augue velit",
   },
   {
      id: 3,
      page: "home_5",
      img: blogThumb_6,
      date: "25 May 2021",
      title: "Foreca Exchange Stock Market 2010-2023",
      desc: "Duis leo. Sed fringilla mauris iamet nibh. odales its augue velit",
   },
]

export default blog_data;