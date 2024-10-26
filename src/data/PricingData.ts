import { StaticImageData } from "next/image";

import priceIcon_1 from "@/assets/img/icon/6.webp";
import priceIcon_2 from "@/assets/img/icon/7.webp";
import priceIcon_3 from "@/assets/img/icon/8.webp";


interface DataType {
   id: number;
   page: string;
   price_icon?: string;
   price_icon_img?: StaticImageData;
   plan: string;
   price: number;
   sub_price?: string;
   pricing_list: {
      icon?: string
      list: string;
      class_name?: string;
   }[];
}[];

const pricing_data: DataType[] = [
   {
      id: 1,
      page: "home_1",
      plan: "Basic plan",
      price: 12,
      pricing_list: [{ list: "30 Days Trial Features" }, { list: "Synced To Cloud Database", }, { list: "10 Hours Of Support" }, { list: "Social Media Integration", class_name: "close" }, { list: "Unlimited Features", class_name: "close" }],
   },
   {
      id: 2,
      page: "home_1",
      plan: "Gold plan",
      price: 59,
      pricing_list: [{ list: "30 Days Trial Features" }, { list: "Synced To Cloud Database", }, { list: "10 Hours Of Support" }, { list: "Social Media Integration", class_name: "close" }, { list: "Unlimited Features", class_name: "close" }],
   },
   {
      id: 3,
      page: "home_1",
      plan: "Platinum plan",
      price: 59,
      pricing_list: [{ list: "30 Days Trial Features" }, { list: "Synced To Cloud Database", }, { list: "10 Hours Of Support" }, { list: "Social Media Integration", class_name: "close" }, { list: "Unlimited Features", class_name: "close" }],
   },

   // home_2

   {
      id: 1,
      page: "home_2",
      plan: "Basic plan",
      price: 12,
      pricing_list: [{ icon: "fa fa-check", list: "30 Days Trial Features" }, { icon: "fa fa-check", list: "Synced To Cloud Database", }, { icon: "fa fa-check", list: "10 Hours Of Support" }, { icon: "fa fa-times", list: "Social Media Integration", class_name: "close" }, { icon: "fa fa-times", list: "Unlimited Features", class_name: "close" }],
   },
   {
      id: 2,
      page: "home_2",
      plan: "Gold plan",
      price: 59,
      pricing_list: [{ icon: "fa fa-check", list: "30 Days Trial Features" }, { icon: "fa fa-check", list: "Synced To Cloud Database", }, { icon: "fa fa-check", list: "10 Hours Of Support" }, { icon: "fa fa-times", list: "Social Media Integration", class_name: "close" }, { icon: "fa fa-times", list: "Unlimited Features", class_name: "close" }],
   },
   {
      id: 3,
      page: "home_2",
      plan: "Platinum plan",
      price: 59,
      pricing_list: [{ icon: "fa fa-check", list: "30 Days Trial Features" }, { icon: "fa fa-check", list: "Synced To Cloud Database", }, { icon: "fa fa-check", list: "10 Hours Of Support" }, { icon: "fa fa-times", list: "Social Media Integration", class_name: "close" }, { icon: "fa fa-times", list: "Unlimited Features", class_name: "close" }],
   },

   // home_3

   {
      id: 1,
      page: "home_3",
      price_icon: "icomoon-save-money",
      plan: "Basic plan",
      price: 12,
      pricing_list: [{ list: "30 Days Trial Features" }, { list: "Synced To Cloud Database", }, { list: "10 Hours Of Support" }, { list: "Social Media Integration", class_name: "close" }, { list: "Unlimited Features", class_name: "close" }],
   },
   {
      id: 2,
      page: "home_3",
      price_icon: "icomoon-money",
      plan: "Gold plan",
      price: 59,
      pricing_list: [{ list: "30 Days Trial Features" }, { list: "Synced To Cloud Database", }, { list: "10 Hours Of Support" }, { list: "Social Media Integration", class_name: "close" }, { list: "Unlimited Features", class_name: "close" }],
   },
   {
      id: 3,
      page: "home_3",
      price_icon: "icomoon-solution",
      plan: "Platinum plan",
      price: 59,
      pricing_list: [{ list: "30 Days Trial Features" }, { list: "Synced To Cloud Database", }, { list: "10 Hours Of Support" }, { list: "Social Media Integration", class_name: "close" }, { list: "Unlimited Features", class_name: "close" }],
   },

   // home_5

   {
      id: 1,
      page: "home_5",
      price_icon_img: priceIcon_1,
      plan: "Basic Plan",
      price: 19,
      sub_price: ".50$",
      pricing_list: [{ list: "30 Days Trial Features" }, { list: "Synced To Cloud Database", }, { list: "10 Hours Of Support" }, { list: "Social Media Integration" }, { list: "Unlimited Features" }],
   },
   {
      id: 2,
      page: "home_5",
      price_icon_img: priceIcon_2,
      plan: "Standard Plan",
      price: 56,
      sub_price: ".00$",
      pricing_list: [{ list: "30 Days Trial Features" }, { list: "Synced To Cloud Database", }, { list: "10 Hours Of Support" }, { list: "Social Media Integration" }, { list: "Unlimited Features" }],
   },
   {
      id: 3,
      page: "home_5",
      price_icon_img: priceIcon_3,
      plan: "Premium Plan",
      price: 56,
      sub_price: ".50$",
      pricing_list: [{ list: "30 Days Trial Features" }, { list: "Synced To Cloud Database", }, { list: "10 Hours Of Support" }, { list: "Social Media Integration" }, { list: "Unlimited Features" }],
   },
];

export default pricing_data;