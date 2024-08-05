const WelcomeMessage = ({ onGetPostsClick }) => {
  return (
    <>
      <div className="welcome-message">
        <h3>there are no posts</h3>
        {/* <button
          className="btn btn-primary server-btn"
          onClick={onGetPostsClick}
        >
          get post from server
        </button> */}
      </div>
    </>
  );
};

export default WelcomeMessage;
