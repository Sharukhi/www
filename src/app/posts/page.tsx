import Post from "@/components/Post";
import { Crimson_Text } from "next/font/google";
import getPostMetadata from "@/utils/getPostMetadata";
import Navbar from "@/components/Navbar";

const crimsonText = Crimson_Text({
  subsets: ["latin"],
  weight: ["400"],
});

export default function Home() {
  const postMetadata = getPostMetadata("posts");
  return (
    <main className={crimsonText.className}>
      <Navbar />
      <div>
        {postMetadata.map((post, postIndex) => {
          return <Post key={postIndex} post={post} />;
        })}
      </div>
    </main>
  );
}
