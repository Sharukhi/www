import Markdown from "markdown-to-jsx";
import getPostMetadata from "@/utils/getPostMetadata";
import React from "react";
import fs from "fs";
import matter from "gray-matter";
import { Crimson_Text } from "next/font/google";
import Navbar from "@/components/Navbar";

const crimsonText = Crimson_Text({
  subsets: ["latin"],
  weight: ["400"],
});

function getPostContent(slug: any) {
  const folder = "posts/";
  const file = folder + `${slug}.md`;
  const content = fs.readFileSync(file, "utf8");

  const matterResult = matter(content);
  return matterResult;
}

export const generateStaticParams = async () => {
  const posts = getPostMetadata("posts");
  return posts.map((post) => ({ slug: post.slug }));
};

export async function generateMetadata({ params }) {
  const id = params?.slug ? "" + params?.slug : "";
  return {
    title: `Sarukhi | ${id.replaceAll("_", " ")}`,
    description: `${id.replaceAll("_", " ")}`,
  };
}

export default function post(props: { params: { slug: any } }) {
  const slug = props.params.slug;
  const post = getPostContent(slug);
  return (
    <main className={crimsonText.className}>
      <Navbar />
      <article className="text-balance  text-[16.6px] prose prose-invert text-[#0e1610]">
        <Markdown>{post.content}</Markdown>
      </article>
    </main>
  );
}
