import { Icon } from "@iconify/react";
import { Crimson_Text } from "next/font/google";

const crimsonText = Crimson_Text({
  subsets: ["latin"],
  weight: ["400"],
});

export default function Home() {
  return (
    <main className={crimsonText.className}>
      <h1 className="mb-6 mt-5">Sharukhi</h1>
      <h4 className="about mb-6">
        Hi, I’m an indie developer based in Bangladesh, currently focused on
        building full-stack applications. I’m always up for a challenge and
        eager to learn. I’m also excited about where my love for technology will
        take me in the future!
      </h4>

      <div></div>

      <div className="space-y-4 mb-8">
        <div className="flex items-center">
          <Icon icon="mdi:github" />
          <a href="#" target="_blank" className="pl-2 text-lg">
            GitHub
          </a>
        </div>
        <div className="flex items-center">
          <Icon icon="mdi:instagram" />
          <a href="#" target="_blank" className="pl-2 text-lg">
            Instagram
          </a>
        </div>
        <div className="flex items-center">
          <Icon icon="ri:twitter-x-fill" />
          <a href="#" target="_blank" className="text-lg pl-2">
            X (formerly Twitter)
          </a>
        </div>
        <div className="flex items-center">
          <Icon icon="mdi:envelope-outline" />
          <a href="#" target="_blank" className="text-lg pl-2">
            hello@sharukhi.xyz
          </a>
        </div>
      </div>

      <h3 className="mb-3 font-bold">
        <a href="/projects">Projects</a>
      </h3>

      <div>
        <div>
          <a href="https://sharukhi.xyz/projects/project-01/">Lofi-Box</a>
          <br />
          <time>May 3, 2024</time>
        </div>
        <br />

        <div>
          <a href="https://sharukhi.xyz/projects/project-03/">Drivesafe</a>
          <br />
          <time>January 10, 2023</time>
        </div>
        <br />

        <div>
          <a href="https://sharukhi.xyz/projects/project-02/">
            Object Avoiding Robot
          </a>
          <br />
          <time>November 18, 2022</time>
        </div>
        <br />
      </div>
      <h3 className="mb-3 font-bold">
        <a href="/posts">Posts</a>
      </h3>

      <div>
        <div>
          <a href="https://sharukhi.xyz/posts/post-02/">
            Simplifying user verification and feature control using kinde.
          </a>
          <br />
          <time>May 6, 2024</time>
        </div>
        <br />

        <div>
          <a href="https://sharukhi.xyz/posts/post-01/">
            Creating desktop applications using web technologies.
          </a>
          <br />
          <time>January 14, 2024</time>
        </div>
        <br />
      </div>
    </main>
  );
}
