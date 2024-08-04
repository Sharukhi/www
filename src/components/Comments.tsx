"use client";

import Giscus from "@giscus/react";

export default function Comments() {
  return (
    <Giscus
      id="comments"
      repo="sharukhi/www"
      repoId="R_kgDOMMNm5Q"
      category="Comments"
      categoryId="DIC_kwDOMMNm5c4Cgq1W"
      mapping="pathname"
      term="Welcome to @giscus/react component!"
      reactionsEnabled="1"
      emitMetadata="0"
      inputPosition="top"
      theme="light"
      lang="en"
      loading="lazy"
    />
  );
}
