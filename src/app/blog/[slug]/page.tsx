import axios from "axios";
import PostCard from "./post-card";

interface BlogPostPageProps {
  params: { slug: string };
}

const BlogPostPage = async ({ params }: BlogPostPageProps) => {
  const slug = params.slug;

  const res = await axios.get(`https://dummyjson.com/posts/${slug}`);
  const data = await res.data;

  const { title, body } = data;

  return <PostCard title={title} body={body} />;
};

export default BlogPostPage;
