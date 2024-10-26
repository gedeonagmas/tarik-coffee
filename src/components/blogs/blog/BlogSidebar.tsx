"use client"
import rc_blog_data from "@/data/RcBlogData";
import Image from "next/image";
import Link from "next/link";

interface DataType {
   catagory: string[];
   tags: string[];
}

const sidebar_data: DataType = {
   catagory: ["Digital marketing", "Machine learning", "It management", "Loan & Insurance", "Web Design", "Digital Marketing", "IT Consultancy",],
   tags: ["Marketing", "Learn", "Business", "Portfolio", "Project", "Art", "Personal", "Landing"],
}

const { catagory, tags } = sidebar_data;

const BlogSidebar = () => {
   return (
      <div className="td-sidebar">
         <div className="widget widget_search">
            <h4 className="widget-title">Search Keyword</h4>
            <form onSubmit={(e) => e.preventDefault()} className="search-form">
               <div className="form-group">
                  <input type="text" placeholder="Key word" />
               </div>
               <button className="submit-btn" type="submit"><i className="fa fa-search"></i></button>
            </form>
         </div>

         <div className="widget widget_catagory">
            <h4 className="widget-title">Catagory</h4>
            <ul className="catagory-items">
               {catagory.map((catagory, index) => (
                  <li key={index}><Link href="/blog">{catagory}</Link></li>
               ))}
            </ul>
         </div>

         <div className="widget widget-recent-post">
            <h4 className="widget-title">Recent News</h4>
            <ul>
               {rc_blog_data.slice(0, 3).map((item) => (
                  <li key={item.id}>
                     <div className="media">
                        <div className="media-left">
                           <Image src={item.img} alt="blog" />
                        </div>
                        <div className="media-body align-self-center">
                           <h6 className="title"><Link href="/blog-details">{item.title}</Link></h6>
                           <div className="post-info"><i className="far fa-calendar-alt"></i><span>{item.date}</span></div>
                        </div>
                     </div>
                  </li>
               ))}
            </ul>
         </div>

         <div className="widget widget_tag_cloud mb-0">
            <h4 className="widget-title">Tags</h4>
            <div className="tagcloud">
               {tags.map((tag, i) => (
                  <Link key={i} href="#">{tag}</Link>
               ))}
            </div>
         </div>
      </div>
   )
}

export default BlogSidebar
