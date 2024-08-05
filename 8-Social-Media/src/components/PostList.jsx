import { useContext, useEffect, useState } from "react";
import Post from "./Post";
import { PostListContext } from "../store/post-list-store";
import WelcomeMessage from "./WelcomeMessage";
import LoadingSpinner from "./LoadingSpinner";

const PostList = () => {
  const { postList, addInitialPosts } = useContext(PostListContext);
  const [fetching, setFetching] = useState(true);

  const handleGetPosts = () => {
    // console.log("started");
    setFetching(true);
    fetch("https://dummyjson.com/posts")
      .then((res) => res.json())
      .then((obj) => {
        addInitialPosts(obj.posts);
        setFetching(false);
        // console.log("returned");
      });
    // console.log("ended");
  };
  useEffect(() => {
    handleGetPosts();
    return () => console.log("component died");
  }, []);

  return (
    <>
      {fetching && <LoadingSpinner></LoadingSpinner>}
      {!fetching && postList.length === 0 && (
        <WelcomeMessage onGetPostsClick={handleGetPosts}></WelcomeMessage>
      )}
      {!fetching &&
        postList.map((post) => <Post key={post.id} post={post}></Post>)}
    </>
  );
};

export default PostList;
