import Image from "next/image"
import Link from "next/link"

import commentImg_1 from "@/assets/img/testimonial/1.webp"
import commentImg_2 from "@/assets/img/testimonial/2.webp"

const BlogDetailsComment = () => {
   return (
      <div className="blog-comment">
         <ul className="comment-list">
            <li className="comment">
               <article id="div-comment-12" className="comment-body">
                  <footer className="comment-meta">
                     <div className="comment-author vcard">
                        <Image alt="" src={commentImg_1} className="avatar avatar-90 photo" loading="lazy" />
                        <b className="fn"><a href="http://example.org/" rel="external nofollow ugc" className="url">John Κώστας Doe Τάδε</a></b> <span className="says">says:</span>
                     </div>
                     <div className="comment-metadata">
                        <Link href="#">March 14, 2013 at 7:57 am</Link>
                        <span className="edit-link">
                           <Link className="comment-edit-link" href="#">Edit</Link>
                        </span>
                     </div>
                  </footer>
                  <div className="comment-content">
                     <p>Comment Depth 01</p>
                  </div>
                  <div className="reply">
                     <Link rel="nofollow" className="comment-reply-link" href="#">Reply</Link>
                  </div>
               </article>
            </li>
            <li className="comment">
               <article id="div-comment-12" className="comment-body">
                  <footer className="comment-meta">
                     <div className="comment-author vcard">
                        <Image alt="" src={commentImg_2} className="avatar avatar-90 photo" height="90" width="90" loading="lazy" />
                        <b className="fn"><a href="http://example.org/" rel="external nofollow ugc" className="url">John Κώστας Doe Τάδε</a></b> <span className="says">says:</span>
                     </div>
                     <div className="comment-metadata">
                        <Link href="#">March 14, 2013 at 7:57 am</Link>
                        <span className="edit-link">
                           <Link className="comment-edit-link" href="#">Edit</Link>
                        </span>
                     </div>
                  </footer>
                  <div className="comment-content">
                     <p>Comment Depth 01</p>
                  </div>
                  <div className="reply">
                     <Link rel="nofollow" className="comment-reply-link" href="#">Reply</Link>
                  </div>
               </article>
            </li>
         </ul>
      </div>
   )
}

export default BlogDetailsComment
