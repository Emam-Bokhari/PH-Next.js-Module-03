import BlogDetailsCard from "@/components/ui/BlogDetailsCard";

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
