import Link from "next/link";

export default function Post(props: { post: any }) {
  const { post } = props;
  return (
    <Link href={`/posts/${post.slug}`}>
      <div>
        {post.title}
        <br />
        <time>{post.date}</time>
      </div>
      <br />
    </Link>
  );
}
