import { useContext } from "react";
import { MdDelete } from "react-icons/md";
import { PostListContext } from "../store/post-list-store";
const Post = ({ post }) => {
  const { deletePost } = useContext(PostListContext);

  return (
    <>
      <div className="card post-card" style={{ width: "30rem" }}>
        <img src="..." className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{post.title}</h5>
          <p className="card-text">{post.body}</p>
          {post.tags.map((tag) => (
            <span key={tag} className="badge text-bg-primary hash-tag">
              {tag}
            </span>
          ))}
          <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
            <MdDelete onClick={() => deletePost(post.id)}></MdDelete>
          </span>

          <div className="alert alert-success reactions" role="alert">
            this post has {post.reactions.likes} likes and{" "}
            {post.reactions.dislikes} dislikes
          </div>
        </div>
      </div>
    </>
  );
};

export default Post;
