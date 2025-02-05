import BlogCard from "@/components/ui/BlogCard";
import { Blog } from "@/types";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "NexaBlogs | Blogs",
};

const BlogsPage = async () => {
  const response = await fetch("http://localhost:5000/blogs", {
    cache: "no-store", // server side rendering
  });
  const blogs = await response.json();
  return (
    <div className="w-[90%] mx-auto">
      <h1 className="text-3xl text-center my-5 font-bold">
        All Blogs From <span className="text-teal-600">Nexa</span>
      </h1>
      <p className="text-center text-gray-400 w-2/5 mx-auto">
        <i>
          Dive into the fascinating world of quantum computing, where unlocking
          unprecedented computational power.
        </i>
      </p>
      <div className="grid grid-cols-3 gap-6  my-5">
        {blogs.map((blog: Blog) => (
          <BlogCard key={blog.id} blog={blog} />
        ))}
      </div>
    </div>
  );
};

export default BlogsPage;
