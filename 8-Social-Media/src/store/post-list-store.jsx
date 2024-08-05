import { createContext, useReducer } from "react";

export const PostListContext = createContext({
  postList: [],
  addPost: () => {},
  addInitialPosts: () => {},
  deletePost: () => {},
});

const DEFAULT_POST_LIST = [
  /* {
    id: "40",
    title: "I am going to mumbai",
    body: "Hii friends I am going to mumbai for my vacation. Hope to enjoy a lot. peace out.",
    reactions: { dislikes: 2, likes: 3 },
    userId: "user-9",
    tags: ["vacation", "mumbai", "enjoying"],
  },
  {
    id: "50",
    title: "Pass ho gya bhai",
    body: "4 saal ki masti ke baad bhi paas ho gya. Hard to believe",
    reactions: { dislikes: 2, likes: 3 },
    userId: "user-12",
    tags: ["graduating", "unvelievable"],
  },
  */
];

const reducer = (state, action) => {
  let newState = state;
  if (action.type === "ADD_POST") {
    newState = [...state, action.payload];
  } else if (action.type === "DELETE_POST") {
    newState = state.filter((item) => item.id != action.payload.id);
  } else if (action.type === "ADD_INITIAL_POSTS") {
    newState = action.payload.posts;
  }
  return newState;
};

const PostListProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(reducer, DEFAULT_POST_LIST);

  const addPost = (newPost) => {
    console.log(newPost.id);
    const action = {
      type: "ADD_POST",
      payload: {
        id: newPost.id,
        title: newPost.title,
        body: newPost.body,
        reactions: newPost.reactions,
        tags: newPost.tags,
        userId: newPost.userId,
      },
    };
    dispatchPostList(action);
  };

  const addInitialPosts = (posts) => {
    // console.log(posts);
    const action = {
      type: "ADD_INITIAL_POSTS",
      payload: {
        posts,
      },
    };
    dispatchPostList(action);
  };

  const deletePost = (id) => {
    console.log("delete post for: " + id);
    const action = {
      type: "DELETE_POST",
      payload: {
        id,
      },
    };
    dispatchPostList(action);
  };

  return (
    <>
      <PostListContext.Provider
        value={{
          postList: postList,
          addPost: addPost,
          addInitialPosts: addInitialPosts,
          deletePost: deletePost,
        }}
      >
        {children}
      </PostListContext.Provider>
    </>
  );
};

export default PostListProvider;
