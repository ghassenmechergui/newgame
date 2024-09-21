import React, { useReducer, useEffect } from "react";

const initialState = { t: 140, l: 40 };
const gameWidth = 500;
const gameHeight = 300;
const playerSize = 20; // حجم اللاعب

const reducer = (state, action) => {
  let newT = state.t;
  let newL = state.l;

  switch (action.type) {
    case "UP":
      newT = state.t - action.payload;
      break;
    case "DOWN":
      newT = state.t + action.payload;
      break;
    case "LEFT":
      newL = state.l - action.payload;
      break;
    case "RIGHT":
      newL = state.l + action.payload;
      break;
    default:
      return state;
  }

  // التأكد من عدم الخروج عن الحدود
  if (newT < 0) newT = 0;
  if (newL < 0) newL = 0;
  if (newT + playerSize > gameHeight) newT = gameHeight - playerSize;
  if (newL + playerSize > gameWidth) newL = gameWidth - playerSize;

  // التأكد من عدم الاصطدام مع العناصر التي تحمل class "m"
  const obstacles = document.querySelectorAll(".m");

  obstacles.forEach((obstacle) => {
    const obstacleRect = obstacle.getBoundingClientRect();

    const playerRect = {
      top: newT,
      left: newL,
      bottom: newT + playerSize,
      right: newL + playerSize,
    };

    if (
      playerRect.right > obstacleRect.left &&
      playerRect.left < obstacleRect.right &&
      playerRect.bottom > obstacleRect.top &&
      playerRect.top < obstacleRect.bottom
    ) {
      // منع الاصطدام بناءً على الاتجاه
      if (action.type === "RIGHT") newL = obstacleRect.left - playerSize;
      if (action.type === "LEFT") newL = obstacleRect.right;
      if (action.type === "DOWN") newT = obstacleRect.top - playerSize;
      if (action.type === "UP") newT = obstacleRect.bottom;
    }
  });

  return { t: newT, l: newL };
};

// React component to manage the game
function Game() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleKeyPress = (e) => {
    const step = 10; // مقدار الحركة في كل مرة
    if (e.key === "ArrowUp") dispatch({ type: "UP", payload: step });
    if (e.key === "ArrowDown") dispatch({ type: "DOWN", payload: step });
    if (e.key === "ArrowLeft") dispatch({ type: "LEFT", payload: step });
    if (e.key === "ArrowRight") dispatch({ type: "RIGHT", payload: step });
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, []);

  return (
    <div
      style={{
        position: "relative",
        width: `${gameWidth}px`,
        height: `${gameHeight}px`,
        border: "2px solid black",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: `${state.t}px`,
          left: `${state.l}px`,
          width: `${playerSize}px`,
          height: `${playerSize}px`,
          backgroundColor: "blue",
        }}
      />
      {/* مثال لحواجز بعناصر class m */}
      <div
        className="m"
        style={{
          position: "absolute",
          top: "100px",
          left: "150px",
          width: "50px",
          height: "50px",
          backgroundColor: "red",
        }}
      />
    </div>
  );
}

export default Game;
