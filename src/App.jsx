import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Stopwatch from "./components/Stopwatch";

function App() {
  const [sec, setSec] = useState(0); //to store seconds
  const [isRunning, setIsRunning] = useState(false); //to toggle start and stop

  useEffect(() => {
    let timer;
    if (isRunning) {
      timer = setInterval(() => {
        setSec((prev) => prev + 1);
      }, 1000);

      return () => {
        clearInterval(timer);
      };
    }
  }, [isRunning]);

  const handleStart = () => {
    setIsRunning(true);
  };

  const handlePause = () => {
    setIsRunning(false);
  };

  const handleStop = () => {
    setIsRunning(false);
    setSec(0);
  };
  return (
    <>
      <Stopwatch
        stop={handleStop}
        start={handleStart}
        pause={handlePause}
        sec={sec}
      />
    </>
  );
}

export default App;
