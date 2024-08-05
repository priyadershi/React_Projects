import { useContext, useId, useRef } from "react";
import PostListProvider, { PostListContext } from "../store/post-list-store";

const CreatePost = () => {
  const userId = useRef();
  const postTitle = useRef();
  const postBody = useRef();
  const reactions = useRef();
  const tags = useRef();

  const { addPost } = useContext(PostListContext);
  let idCount = 3;

  const handleSubmit = (event) => {
    event.preventDefault();
    const newPost = {
      id: Date.now(),
      title: postTitle.current.value,
      body: postBody.current.value,
      reactions: {
        likes: reactions.current.value,
        dislikes: reactions.current.value,
      },
      userId: userId.current.value,
      tags: tags.current.value.split(" "),
    };
    userId.current.value = "";
    postTitle.current.value = "";
    postBody.current.value = "";
    reactions.current.value = "";
    tags.current.value = "";
    addPost(newPost);
  };

  return (
    <>
      <form className="create-post" onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="userid" className="form-label">
            User Id
          </label>
          <input
            type="text"
            ref={userId}
            placeholder="enter you user id"
            className="form-control"
            id="userId"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Post title
          </label>
          <input
            type="text"
            ref={postTitle}
            placeholder="how are you feeling today ..."
            className="form-control"
            id="post-title"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="body" className="form-label">
            Post Content
          </label>
          <textarea
            type="text"
            ref={postBody}
            rows="4"
            placeholder="tell us more about it"
            className="form-control"
            id="body"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="reactions" className="form-label">
            Reactions
          </label>
          <input
            type="text"
            ref={reactions}
            placeholder="how many people reacted to this post"
            className="form-control"
            id="reactions"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="tags" className="form-label">
            Enter Hashtags here
          </label>
          <input
            type="text"
            ref={tags}
            placeholder="write tags seperated with space"
            className="form-control"
            id="tags"
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Post
        </button>
      </form>
    </>
  );
};

export default CreatePost;
