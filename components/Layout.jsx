import React from "react";
import HeadInfo from "./HeadInfo";
import Nav from "./Nav";

export default function Layout({ children }) {
  return (
    <>
      <Nav />
      <HeadInfo
        title="My Blog!"
        keyword="My Blog powered by Next js!"
        contents="My Blog powererd by Next js!"
      />
      <div>{children}</div>
    </>
  );
}
