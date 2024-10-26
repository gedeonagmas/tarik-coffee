import { StaticImageData } from "next/image"

import introIcon_1 from "@/assets/img/icon/1.webp";
import introIcon_2 from "@/assets/img/icon/2.webp";
import introIcon_3 from "@/assets/img/icon/3.webp";
import introIcon_4 from "@/assets/img/home-cyber/service/1.webp";
import introIcon_5 from "@/assets/img/home-cyber/service/2.webp";
import introIcon_6 from "@/assets/img/home-cyber/service/3.webp";
import introHoverIcon_1 from "@/assets/img/home-cyber/service/01.webp";
import introHoverIcon_2 from "@/assets/img/home-cyber/service/02.webp";
import introHoverIcon_3 from "@/assets/img/home-cyber/service/03.webp";

interface DataType {
   id: number;
   page: string;
   icon?: string;
   icon_img?: StaticImageData;
   hover_icon_img?: StaticImageData;
   title: string;
   desc: string;
}[];

const intro_data: DataType[] = [
   {
      id: 1,
      page: "home_2",
      icon: "icomoon-gear",
      title: "Flexible Solutions",
      desc: "Curabitur ullamcorper ultricies nisiamng tiamns rhoncus. Maecenas tempus tellus endimentum rhoncem",
   },
   {
      id: 2,
      page: "home_2",
      icon: "icomoon-time",
      title: "Flexible Solutions",
      desc: "Curabitur ullamcorper ultricies nisiamng tiamns rhoncus. Maecenas tempus tellus endimentum rhoncem",
   },
   {
      id: 3,
      page: "home_2",
      icon: "icomoon-money",
      title: "Flexible Solutions",
      desc: "Curabitur ullamcorper ultricies nisiamng tiamns rhoncus. Maecenas tempus tellus endimentum rhoncem",
   },

   // home_4

   {
      id: 1,
      page: "home_4",
      icon_img: introIcon_1,
      title: "Flexiable Pricing",
      desc: "Human labor hours saved with help of AI",
   },
   {
      id: 2,
      page: "home_4",
      icon_img: introIcon_2,
      title: "Flexiable Pricing",
      desc: "Human labor hours saved with help of AI",
   },
   {
      id: 3,
      page: "home_4",
      icon_img: introIcon_3,
      title: "Flexiable Pricing",
      desc: "Human labor hours saved with help of AI",
   },

   // home_5

   {
      id: 1,
      page: "home_5",
      icon_img: introIcon_4,
      hover_icon_img: introHoverIcon_1,
      title: "Malware Detection Removal",
      desc: "Containing Lorem Ipsum Passages, And More Recently",
   },
   {
      id: 2,
      page: "home_5",
      icon_img: introIcon_5,
      hover_icon_img: introHoverIcon_2,
      title: "24/7 Cyber Security",
      desc: "Containing Lorem Ipsum Passages, And More Recently",
   },
   {
      id: 3,
      page: "home_5",
      icon_img: introIcon_6,
      hover_icon_img: introHoverIcon_3,
      title: "Managed Web Application",
      desc: "Containing Lorem Ipsum Passages, And More Recently",
   },
]

export default intro_data;