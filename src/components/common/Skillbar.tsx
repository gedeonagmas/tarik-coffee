import Progress from "@/components/common/Progress";

interface DataType {
   title: string;
   percentage: number;
}[];

const skill_data: DataType[] = [
   {
      title: "Web development",
      percentage: 75,
   },
   {
      title: "It solution",
      percentage: 95,
   },
   {
      title: "Web development",
      percentage: 75,
   },
   {
      title: "Data Research",
      percentage: 60,
   },
]

const Skillbar = () => {
   return (
      <>
         {skill_data.map((item, i) => (
            <div key={i} className="single-progressbar">
               <h6>{item.title}</h6>
               <div className="progress-item" id="progress-running">
                  <Progress finish={item.percentage} />
               </div>
            </div>
         ))}
      </>
   )
}

export default Skillbar;
