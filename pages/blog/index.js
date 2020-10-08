import React from "react";
import Blog from "~/components/blog/Blog";
import BasicLayout from "~/components/layouts/BasicLayout";

const BlogPage = () => {
  return (
    <BasicLayout>
      <Blog />
    </BasicLayout>
  );
};

export default BlogPage;
