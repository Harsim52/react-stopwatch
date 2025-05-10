import React from "react";

const Stopwatch = ({ start, stop, pause, sec }) => {
  const hours = Math.floor(sec / 3600);
  const minutes = Math.floor((sec % 3600) / 60);
  const seconds = sec % 60;

  const formatTime = (time) => String(time).padStart(2, "0");

  return (
    <div style={styles.wrapper}>
      <div style={styles.timerBox}>
        <h1 style={styles.timerText}>
          {formatTime(hours)}:{formatTime(minutes)}:{formatTime(seconds)}
        </h1>
        <div style={styles.buttons}>
          <button style={{ ...styles.button, backgroundColor: "#28a745" }} onClick={start}>
            Start
          </button>
          <button style={{ ...styles.button, backgroundColor: "#ffc107" }} onClick={pause}>
            Pause
          </button>
          <button style={{ ...styles.button, backgroundColor: "#dc3545" }} onClick={stop}>
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};

const styles = {
  wrapper: {
    height: "100vh",
    background: "linear-gradient(to right, #00c6ff, #0072ff)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontFamily: "'Poppins', sans-serif",
    padding: "20px", // Mobile ke liye padding daali
    boxSizing: "border-box",
  },
  timerBox: {
    backgroundColor: "#ffffff",
    padding: "40px 30px",
    borderRadius: "20px",
    boxShadow: "0px 10px 30px rgba(0,0,0,0.2)",
    textAlign: "center",
    maxWidth: "500px", 
    width: "100%",
  },
  timerText: {
    fontSize: "8vw", 
    marginBottom: "30px",
    color: "#333",
    letterSpacing: "3px",
    wordWrap: "break-word",
  },
  buttons: {
    display: "flex",
    flexWrap: "wrap", 
    justifyContent: "center",
    gap: "15px",
  },
  button: {
    flex: "1 1 30%", // Responsive width
    minWidth: "100px",
    padding: "10px 15px",
    fontSize: "16px",
    color: "white",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    transition: "all 0.3s ease",
  },
};

export default Stopwatch;
