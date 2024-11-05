import Breadcrumb from "@/components/common/Breadcrumb"
import HeaderOne from "@/layouts/headers/HeaderOne"
import BlogArea from "./BlogArea"
import FooterOne from "@/layouts/footers/FooterOne"

const Blog = () => {
  return (
    <>
      <HeaderOne />
      <Breadcrumb title="Our news and events" sub_title="News and Event" />
      <BlogArea />
      <FooterOne />
    </>
  )
}

export default Blog
