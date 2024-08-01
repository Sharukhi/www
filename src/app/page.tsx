import getPostMetadata from "@/utils/getPostMetadata";
import { Icon } from "@iconify/react";
import { Crimson_Text } from "next/font/google";
import Post from "@/components/Post";
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
      <h4 className="about mb-6">
        Hi, I’m an indie developer based in Bangladesh, currently focused on
        building full-stack applications. I’m always up for a challenge and
        eager to learn. I’m also excited about where my love for technology will
        take me in the future!
      </h4>

      <div></div>

      <div className="space-y-4 mb-8">
        <div className="flex items-center">
          <Icon icon="mdi:github" height={20} />
          <a
            href="https://github.com/sharukhi"
            target="_blank"
            className="pl-2 text-lg"
          >
            GitHub
          </a>
        </div>
        <div className="flex items-center">
          <Icon icon="mdi:instagram" height={20} />
          <a
            href="https://www.instagram.com/ataullah_sharukhi/"
            target="_blank"
            className="pl-2 text-lg"
          >
            Instagram
          </a>
        </div>
        <div className="flex items-center">
          <Icon icon="ri:twitter-x-fill" height={20} />
          <a
            href="https://x.com/sharukhi_"
            target="_blank"
            className="text-lg pl-2"
          >
            X (formerly Twitter)
          </a>
        </div>
        <div className="flex items-center">
          <Icon icon="mdi:envelope-outline" height={20} />
          <a
            href="mailto:hello@sharukhi.xyz"
            target="_blank"
            className="text-lg pl-2"
          >
            hello@sharukhi.xyz
          </a>
        </div>
      </div>

      <h3 className="mb-3 font-bold">Projects</h3>

      <div>
        <div>
          <a href="https://github.com/sharukhi/khobor" target="_blank">
            Khobor
          </a>
          <br />
          <p className="text-[#8a8a8a]">2024-05-01</p>
        </div>
        <br />

        <div>
          <a href="https://github.com/sharukhi/drivesafe" target="_blank">
            Drivesafe
          </a>
          <br />
          <p className="text-[#8a8a8a]">2023-01-10</p>
        </div>
        <br />

        <div>
          <a href="https://github.com/sharukhi/oab" target="_blank">
            Obstacle avoiding robot
          </a>
          <br />
          <p className="text-[#8a8a8a]">2022-09-18</p>
        </div>
        <br />
      </div>
      <h3 className="mb-3 font-bold">Posts</h3>

      <div>
        {postMetadata.slice(-3).map((post, postIndex) => {
          return <Post key={postIndex} post={post} />;
        })}
      </div>
    </main>
  );
}
