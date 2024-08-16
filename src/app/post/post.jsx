import React from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import PostCard from "./PostCard";
import Header from "../../components/Header/Header";

const PostApp = () => {
  return (
    <div className="flex min-h-screen">
      <main className="flex-1 p-8">
        <PostCard />
      </main>
    </div>
  );
};

export default PostApp;
