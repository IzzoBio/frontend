import React from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import PostCard from "./PostCard";
import Header from "../../components/Header/Header";

const PostApp = (props) => {
  const { feeds } = props;

  return (
    <div className="flex min-h-screen">
      <main className="flex-1">
        <PostCard feeds={feeds}/>
      </main>
    </div>
  );
};

export default PostApp;
