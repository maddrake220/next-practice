import Head from "next/head";
import React from "react";

export default function HeadInfo({ title, keyword, contents }) {
  return (
    <Head>
      <title>{title}</title>
      <meta keyword={keyword} />
      <meta contents={contents} />
    </Head>
  );
}

HeadInfo.defaultProps = {
  title: "My Blog",
  keyword: "Blog powered by Next js",
  contents: "Practice Next js",
};
