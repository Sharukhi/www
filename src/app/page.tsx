import getPostMetadata from "@/utils/getPostMetadata";
import { Icon } from "@iconify/react";
import Post from "@/components/Post";
import Navbar from "@/components/Navbar";
import Link from "next/link";
import { home } from "./data/home";
import { links } from "./data/links";
import { projects } from "./data/projects";

export default function Home() {
  const postMetadata = getPostMetadata("posts");
  return (
    <main>
      <Navbar />
      <h4 className="about mb-6">{home[0].about}</h4>

      <div></div>

      <div className="space-y-4 mb-8">
        {links.map((links) => (
          <div className="flex items-center" key={links.id}>
            <Icon icon={links.icon} height={20} />
            <Link href={links.link} target="_blank" className="pl-2 text-lg">
              {links.name}
            </Link>
          </div>
        ))}
      </div>

      <h3 className="mb-3 font-bold">Projects</h3>

      <div>
        {projects.map((project) => (
          <div key={project.id}>
            <div>
              <Link href={project.link} target="_blank">
                {project.title}
              </Link>
              <br />
              <p className="text-[#8a8a8a]">{project.date}</p>
            </div>
            <br />
          </div>
        ))}
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
