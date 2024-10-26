import { StaticImageData } from "next/image";

import rcThumb_1 from "@/assets/img/widget/1.webp";
import rcThumb_2 from "@/assets/img/widget/2.webp";
import rcThumb_3 from "@/assets/img/widget/3.webp";

interface DataType {
   id: number;
   img: StaticImageData;
   title: string;
   date: string;
}[];

const rc_blog_data: DataType[] = [
   {
      id: 1,
      img: rcThumb_1,
      title: "Social Media For Promote Business.",
      date: "15 October",
   },
   {
      id: 2,
      img: rcThumb_2,
      title: "Marketing For Base market watch",
      date: "15 October",
   },
   {
      id: 3,
      img: rcThumb_3,
      title: "Condtum Integer urna at faucibus",
      date: "15 October",
   },
   {
      id: 4,
      img: rcThumb_1,
      title: "Social Media For Promote Business.",
      date: "15 October",
   },
   {
      id: 5,
      img: rcThumb_2,
      title: "Mauris turpis nunc landit et volutpat.",
      date: "15 October",
   },
]

export default rc_blog_data;