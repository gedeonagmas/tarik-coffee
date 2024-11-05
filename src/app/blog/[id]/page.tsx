import BlogDetailsArea from "@/components/blogs/blog-details/BlogDetailsArea";
import Wrapper from "@/layouts/Wrapper";
import FooterOne from "@/layouts/footers/FooterOne";
import HeaderOne from "@/layouts/headers/HeaderOne";


const index = ({ params }: { params: { id: number } }) => {

  return (
    <Wrapper>
      <HeaderOne />
      <BlogDetailsArea />
      <FooterOne />
    </Wrapper>
  );
};

export default index;
