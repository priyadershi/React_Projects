import { useContext, useId, useRef } from "react";
import PostListProvider, { PostListContext } from "../store/post-list-store";
import { Form, redirect, useNavigate } from "react-router-dom";

const CreatePost = () => {
  const navigate = useNavigate();

  /*
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
    navigate("/");
  };
  */

  return (
    <>
      <Form className="create-post" method="POST">
        <div className="mb-3">
          <label htmlFor="userid" className="form-label">
            User Id
          </label>
          <input
            type="text"
            name="userId"
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
            name="title"
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
            name="body"
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
            name="reactions"
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
            name="tags"
            placeholder="write tags seperated with space"
            className="form-control"
            id="tags"
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Post
        </button>
      </Form>
    </>
  );
};

export default CreatePost;

export async function createPostAction(data) {
  const formData = await data.request.formData();
  const postData = Object.fromEntries(formData);
  postData.tags = postData.tags.split(" ");

  fetch("https://dummyjson.com/posts/add", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(postData),
  })
    .then((res) => res.json())
    .then((post) => {
      console.log(post);
    });
  return redirect("/");
}
