import { useContext, useEffect, useState } from "react";
import Post from "./Post";
import { PostListContext } from "../store/post-list-store";
import WelcomeMessage from "./WelcomeMessage";
import LoadingSpinner from "./LoadingSpinner";
import { useLoaderData } from "react-router-dom";

const PostList = () => {
  const { addInitialPosts } = useContext(PostListContext);

  let postList = useLoaderData();

  // posts.map((post) => {
  //   console.log(post.id);
  // });

  return (
    <>
      {/* {<LoadingSpinner></LoadingSpinner>} */}
      {postList.length === 0 && <WelcomeMessage></WelcomeMessage>}
      {postList.map((post) => (
        <Post key={post.id} post={post}></Post>
      ))}
    </>
  );
};

export const postLoader = () => {
  return fetch("https://dummyjson.com/posts")
    .then((res) => res.json())
    .then((obj) => {
      return obj.posts;
    });
};

export default PostList;
