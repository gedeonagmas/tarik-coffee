import BlogDetailsArea from "@/components/blogs/blog-details/BlogDetailsArea";
import Breadcrumb from "@/components/common/Breadcrumb";
import inner_blog_data from "@/data/InnerBlogData";
import Wrapper from "@/layouts/Wrapper";
import FooterOne from "@/layouts/footers/FooterOne";
import HeaderOne from "@/layouts/headers/HeaderOne";

export const metadata = {
  title:
    "Blog Details Iitechie - IT Solutions and Services React Next js Template",
};
const index = ({ params }: { params: { id: number } }) => {
  const blogs = inner_blog_data;
  const single_blog = blogs.find(
    (item) => Number(item.id) === Number(params.id)
  );

  return (
    <Wrapper>
      <HeaderOne />
      {/* <Breadcrumb title="Our blog Details" sub_title="Blog Details" /> */}
      <BlogDetailsArea single_blog={single_blog} key={single_blog?.id} />
      <FooterOne />
    </Wrapper>
  );
};

export default index;
