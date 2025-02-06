import BlogDetailsCard from "@/components/ui/BlogDetailsCard";
import { Blog } from "@/types";

export const generateStaticParams = async () => {
  const response = await fetch("http://localhost:5000/blogs");
  const blogs = await response.json();

  return blogs?.slice(0, 3)?.map((blog: Blog) => ({
    blogId: blog.id,
  }));
};

export const generateMetadata = async ({
  params,
}: {
  params: Promise<{ blogId: string }>;
}) => {
  const { blogId } = await params;
  const response = await fetch(`http://localhost:5000/blogs/${blogId}`);
  const blog = await response.json();
  return {
    title: blog?.title,
    description: blog?.description,
    openGraph: {
      title: blog?.title,
      description: blog?.description,
      url: `http://localhost:5000/blogs/${blogId}`,
      type: "article",
      images: [
        {
          url: blog?.image,
          width: 1200,
          height: 630,
          alt: blog?.title,
        },
      ],
      siteName: "NexaBlog",
    },
  };
};

export default async function BlogDetailsPage({
  params,
}: {
  params: Promise<{ blogId: string }>;
}) {
  const { blogId } = await params;
  const response = await fetch(`http://localhost:5000/blogs/${blogId}`);
  const blog = await response.json();
  //   console.log(blog);
  return (
    <div className="w-[90%] mx-auto my-4">
      <BlogDetailsCard blog={blog} />
    </div>
  );
}
