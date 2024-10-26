"use client"
import { toast } from 'react-toastify';
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';

interface FormData {
   name: string;
   email: string;
   message: string;
   web: string;
}

const schema = yup
   .object({
      name: yup.string().required().label("Name"),
      email: yup.string().required().email().label("Email"),
      message: yup.string().required().label("Message"),
      web: yup.string().required().label("Website"),
   })
   .required();

const BlogFrom = () => {

   const { register, handleSubmit, reset, formState: { errors }, } = useForm<FormData>({ resolver: yupResolver(schema), });
   const onSubmit = (data: FormData) => {
      const notify = () => toast('Comment sent successfully', { position: 'top-center' });
      notify();
      reset();
   };

   return (
      <form onSubmit={handleSubmit(onSubmit)} className="blog-comment-form">
         <div className="mb-3">
            <h3>Leave a Reply</h3>
         </div>
         <div className="row">
            <div className="col-md-6">
               <div className="single-input-inner style-border">
                  <input type="text" id="name" {...register("name")} placeholder="Name" />
                  <p className="form_error">{errors.name?.message}</p>
               </div>
            </div>
            <div className="col-md-6">
               <div className="single-input-inner style-border">
                  <input type="email" id="email" {...register("email")} placeholder="Email" />
                  <p className="form_error">{errors.email?.message}</p>
               </div>
            </div>
            <div className="col-12">
               <div className="single-input-inner style-border">
                  <input type="url" id="web" {...register("web")} placeholder="Website" />
                  <p className="form_error">{errors.web?.message}</p>
               </div>
            </div>
            <div className="col-12">
               <div className="single-input-inner style-border">
                  <textarea id="message" {...register("message")} placeholder="Message"></textarea>
                  <p className="form_error">{errors.message?.message}</p>
               </div>
            </div>
            <div className="col-12">
               <button className="it-btn btn-base">Post Comment</button>
            </div>
         </div>
      </form>
   )
}

export default BlogFrom
