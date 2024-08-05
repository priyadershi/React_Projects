function TimeWindow() {
  let date = new Date();
  let curTime = date.toLocaleTimeString();
  let curDate = date.toLocaleDateString();
  return (
    <>
      <div className="container">
        <div className="desc">
          <p>This is the clock that shows the time in Bharat all the times</p>
          <p>
            This is the current time: {curDate} - {curTime}
          </p>
        </div>
      </div>
    </>
  );
}

export default TimeWindow;
