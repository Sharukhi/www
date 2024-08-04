import Markdown from "markdown-to-jsx";
import getPostMetadata from "@/utils/getPostMetadata";
import React from "react";
import fs from "fs";
import matter from "gray-matter";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Comments from "@/components/Comments";

interface PostMetadata {
  slug: string;
  // Add other properties of PostMetadata if needed
}

function getPostContent(slug: string): matter.GrayMatterFile<string> {
  const folder = "posts/";
  const file = `${folder}${slug}.md`;
  const content = fs.readFileSync(file, "utf8");

  return matter(content);
}

export const generateStaticParams = async (): Promise<{ slug: string }[]> => {
  const posts = getPostMetadata("posts");
  return posts.map((post: PostMetadata) => ({ slug: post.slug }));
};

export async function generateMetadata({
  params,
}: {
  params: { slug?: string };
}) {
  const id = params?.slug ? params.slug : "";
  return {
    title: `${id.replaceAll("_", " ")} - Sharukhi`,
    description: `${id.replaceAll("_", " ")}`,
  };
}

interface PostProps {
  params: {
    slug: string;
  };
}

export default function Post({ params }: PostProps) {
  const { slug } = params;
  const post = getPostContent(slug);

  return (
    <main>
      <Navbar />
      <article className="text-balance text-[16.6px] prose prose-invert text-[#0e1610]">
        <Markdown>{post.content}</Markdown>
      </article>
      <Comments />
      <Footer />
    </main>
  );
}
