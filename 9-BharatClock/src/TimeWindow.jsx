import { useEffect } from "react";
import { useState } from "react";

function TimeWindow() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    console.log("interval started");
    const intervalId = setInterval(() => setTime(new Date()), 1000);
    return () => {
      clearInterval(intervalId);
      console.log("interval cancelled");
    };
  }, []);

  return (
    <>
      <div className="container">
        <div className="desc">
          <p>This is the clock that shows the time in Bharat all the times</p>
          <p>
            This is the current time: {time.toLocaleDateString()} -{" "}
            {time.toLocaleTimeString()}
          </p>
        </div>
      </div>
    </>
  );
}

export default TimeWindow;
