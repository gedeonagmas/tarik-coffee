import { StaticImageData } from "next/image";

import portfolioThumb_1 from "@/assets/img/project/9.webp";
import portfolioThumb_2 from "@/assets/img/project/10.webp";
import portfolioThumb_3 from "@/assets/img/project/12.webp";
import portfolioThumb_4 from "@/assets/img/project/11.webp";
import portfolioThumb_5 from "@/assets/img/project/15.webp";
import portfolioThumb_6 from "@/assets/img/project/13.webp";
import portfolioThumb_7 from "@/assets/img/project/14.webp";

interface DataType {
   id: number,
   page:string;
   thumb?: StaticImageData;
   title?: string;
   desc?: string;
   item_two?: {
      id: number,
      thumb: StaticImageData;
      title: string;
      desc: string;
   }[]
}[];

const inner_project_data: DataType[] = [
   {
      id: 1,
      page:"project_1",
      thumb: portfolioThumb_1,
      title: "Data solution",
      desc: "Discover More",
   },
   {
      id: 2,
      page:"project_1",
      item_two: [{
         id: 1,
         thumb: portfolioThumb_2,
         title: "Data solution",
         desc: "Discover More",
      }, {
         id: 2,
         thumb: portfolioThumb_4,
         title: "Data solution",
         desc: "Discover More",
      },
      ]
   },
   {
      id: 3,
      page:"project_1",
      thumb: portfolioThumb_3,
      title: "Data solution",
      desc: "Discover More",
   },

   // project_2

   {
      id: 1,
      page:"project_2",
      thumb: portfolioThumb_1,
      title: "Data solution",
      desc: "Discover More",
   },
   {
      id: 2,
      page:"project_2",
      item_two: [{
         id: 1,
         thumb: portfolioThumb_2,
         title: "Data solution",
         desc: "Discover More",
      }, {
         id: 2,
         thumb: portfolioThumb_4,
         title: "Data solution",
         desc: "Discover More",
      },
      ]
   },
   {
      id: 3,
      page:"project_2",
      thumb: portfolioThumb_3,
      title: "Data solution",
      desc: "Discover More",
   },
   {
      id: 4,
      page:"project_2",
      thumb: portfolioThumb_5,
      title: "Data solution",
      desc: "Discover More",
   },
   {
      id: 5,
      page:"project_2",
      item_two: [{
         id: 1,
         thumb: portfolioThumb_6,
         title: "Data solution",
         desc: "Discover More",
      }, {
         id: 2,
         thumb: portfolioThumb_7,
         title: "Data solution",
         desc: "Discover More",
      },
      ]
   },
   {
      id: 6,
      page:"project_2",
      item_two: [{
         id: 1,
         thumb: portfolioThumb_4,
         title: "Data solution",
         desc: "Discover More",
      }, {
         id: 2,
         thumb: portfolioThumb_2,
         title: "Data solution",
         desc: "Discover More",
      },
      ]
   },
];

export default inner_project_data;