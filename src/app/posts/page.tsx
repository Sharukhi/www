import Post from "@/components/Post";
import getPostMetadata from "@/utils/getPostMetadata";
import Navbar from "@/components/Navbar";

export default function Home() {
  const postMetadata = getPostMetadata("posts");
  return (
    <main>
      <Navbar />
      <div>
        {postMetadata.map((post, postIndex) => {
          return <Post key={postIndex} post={post} />;
        })}
      </div>
    </main>
  );
}
