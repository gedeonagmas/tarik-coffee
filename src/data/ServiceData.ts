import { StaticImageData } from "next/image";

import serviceIcon_1 from "@/assets/img/home-cyber/service/service-01.webp";
import serviceIcon_2 from "@/assets/img/home-cyber/service/service-02.webp";
import serviceIcon_3 from "@/assets/img/home-cyber/service/service-03.webp";
import serviceIcon_4 from "@/assets/img/home-cyber/service/service-04.webp";
import serviceIcon_5 from "@/assets/img/home-cyber/service/service-05.webp";
import serviceIcon_6 from "@/assets/img/home-cyber/service/service-06.webp";

import serviceHoverIcon_1 from "@/assets/img/home-cyber/service/service-001.webp";
import serviceHoverIcon_2 from "@/assets/img/home-cyber/service/service-002.webp";
import serviceHoverIcon_3 from "@/assets/img/home-cyber/service/service-003.webp";
import serviceHoverIcon_4 from "@/assets/img/home-cyber/service/service-004.webp";
import serviceHoverIcon_5 from "@/assets/img/home-cyber/service/service-005.webp";
import serviceHoverIcon_6 from "@/assets/img/home-cyber/service/service-006.webp";

interface DataType {
   id: number;
   page: string;
   icon?: string;
   title: string;
   desc: string;
   icon_img?:StaticImageData;
   hover_icon_img?:StaticImageData;
}[];

const service_data: DataType[] = [
   {
      id: 1,
      page: "home_1",
      icon: "icomoon-layer",
      title: "Web design",
      desc: "Curabitur ullamcorper ultricies nisiam tiamns rhoncus. Maecenas tempus tellus endimentum",
   },
   {
      id: 2,
      page: "home_1",
      icon: "icomoon-application",
      title: "App development",
      desc: "Curabitur ullamcorper ultricies nisiam tiamns rhoncus. Maecenas tempus tellus endimentum",
   },
   {
      id: 3,
      page: "home_1",
      icon: "icomoon-cloud-data",
      title: "Cloud Service",
      desc: "Curabitur ullamcorper ultricies nisiam tiamns rhoncus. Maecenas tempus tellus endimentum",
   },
   {
      id: 4,
      page: "home_1",
      icon: "icomoon-megaphone",
      title: "It mangement",
      desc: "Curabitur ullamcorper ultricies nisiam tiamns rhoncus. Maecenas tempus tellus endimentum",
   },

   // home_2
   {
      id: 1,
      page: "home_2",
      icon: "icomoon-layer",
      title: "App Development",
      desc: "Curabitur ullamcorper ultricies nisiam tiamns rhoncus. Maecenas tempus tellus endimentum",
   },
   {
      id: 2,
      page: "home_2",
      icon: "icomoon-application",
      title: "Web design",
      desc: "Curabitur ullamcorper ultricies nisiam tiamns rhoncus. Maecenas tempus tellus endimentum",
   },
   {
      id: 3,
      page: "home_2",
      icon: "icomoon-cloud-data",
      title: "It Mangement",
      desc: "Curabitur ullamcorper ultricies nisiam tiamns rhoncus. Maecenas tempus tellus endimentum",
   },
   {
      id: 4,
      page: "home_2",
      icon: "icomoon-megaphone",
      title: "Digital Marketing",
      desc: "Curabitur ullamcorper ultricies nisiam tiamns rhoncus. Maecenas tempus tellus endimentum",
   },
   {
      id: 5,
      page: "home_2",
      icon: "icomoon-lock",
      title: "Cloud Service",
      desc: "Curabitur ullamcorper ultricies nisiam tiamns rhoncus. Maecenas tempus tellus endimentum",
   },
   {
      id: 6,
      page: "home_2",
      icon: "icomoon-magnifiying-glass",
      title: "Machine learning",
      desc: "Curabitur ullamcorper ultricies nisiam tiamns rhoncus. Maecenas tempus tellus endimentum",
   },

   // home_5
   
   {
      id: 1,
      page: "home_5",
      icon_img:serviceIcon_1,
      hover_icon_img:serviceHoverIcon_1,
      title: "Application Security",
      desc: "What is application security and examples? Image result for application security",
   },
   {
      id: 2,
      page: "home_5",
      icon_img:serviceIcon_2,
      hover_icon_img:serviceHoverIcon_2,
      title: "Cloud Security",
      desc: "What is application security and examples? Image result for application security",
   },
   {
      id: 3,
      page: "home_5",
      icon_img:serviceIcon_3,
      hover_icon_img:serviceHoverIcon_3,
      title: "Structure Security",
      desc: "What is application security and examples? Image result for application security",
   },
   {
      id: 4,
      page: "home_5",
      icon_img:serviceIcon_4,
      hover_icon_img:serviceHoverIcon_4,
      title: "Threat Hunter",
      desc: "What is application security and examples? Image result for application security",
   },
   {
      id: 5,
      page: "home_5",
      icon_img:serviceIcon_5,
      hover_icon_img:serviceHoverIcon_5,
      title: "Incident Responder",
      desc: "What is application security and examples? Image result for application security",
   },
   {
      id: 6,
      page: "home_5",
      icon_img:serviceIcon_6,
      hover_icon_img:serviceHoverIcon_6,
      title: "Data Security",
      desc: "What is application security and examples? Image result for application security",
   },

   // inner_page
   
   {
      id: 1,
      page: "inner_page",
      icon:"icomoon-profile",
      title: "Web design",
      desc: "Curabitur ullamcorper ultricies nisiam tiamns rhoncus. Maecenas tempus tellus endimentum",
   }, 
   {
      id: 2,
      page: "inner_page",
      icon:"icomoon-layer",
      title: "Web design",
      desc: "Curabitur ullamcorper ultricies nisiam tiamns rhoncus. Maecenas tempus tellus endimentum",
   },
   {
      id: 3,
      page: "inner_page",
      icon:"icomoon-application",
      title: "Web design",
      desc: "Curabitur ullamcorper ultricies nisiam tiamns rhoncus. Maecenas tempus tellus endimentum",
   },
   {
      id: 4,
      page: "inner_page",
      icon:"icomoon-cloud-data",
      title: "Web design",
      desc: "Curabitur ullamcorper ultricies nisiam tiamns rhoncus. Maecenas tempus tellus endimentum",
   },
   {
      id: 5,
      page: "inner_page",
      icon:"icomoon-megaphone",
      title: "Web design",
      desc: "Curabitur ullamcorper ultricies nisiam tiamns rhoncus. Maecenas tempus tellus endimentum",
   },
   {
      id: 6,
      page: "inner_page",
      icon:"icomoon-lock",
      title: "Web design",
      desc: "Curabitur ullamcorper ultricies nisiam tiamns rhoncus. Maecenas tempus tellus endimentum",
   },
   {
      id: 7,
      page: "inner_page",
      icon:"icomoon-magnifiying-glass",
      title: "Web design",
      desc: "Curabitur ullamcorper ultricies nisiam tiamns rhoncus. Maecenas tempus tellus endimentum",
   },
   {
      id: 8,
      page: "inner_page",
      icon:"icomoon-computer",
      title: "Web design",
      desc: "Curabitur ullamcorper ultricies nisiam tiamns rhoncus. Maecenas tempus tellus endimentum",
   },
   {
      id: 9,
      page: "inner_page",
      icon:"icomoon-deep-learning",
      title: "Web design",
      desc: "Curabitur ullamcorper ultricies nisiam tiamns rhoncus. Maecenas tempus tellus endimentum",
   },
]

export default service_data;