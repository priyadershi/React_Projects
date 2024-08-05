const LoadingSpinner = () => {
  return (
    <>
      <div className="d-flex justify-content-center spinner">
        <div className="spinner-border" role="status">
          <span className="sr-only"></span>
        </div>
      </div>
    </>
  );
};

export default LoadingSpinner;
