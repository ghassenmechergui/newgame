import React from "react";
import { usePosition } from "../context/ContextPosition";
import { useEffect, useState } from "react";
import isColliding from "./logic";
import { Alert } from "@mui/material";
import { useNavigate } from "react-router-dom";
import anime from "animejs/lib/anime.es";
export default function () {
  const { position, dispatch } = usePosition();
  const [alert, setAlert] = useState(null);
  const navigate = useNavigate();
  let style = {
    position: "absolute",
    top: `${position.t}px`,
    left: `${position.l}px`,
  };
  useEffect(() => {
    dispatch({ type: "entre" });
  }, []);
  useEffect(() => {
    const intervalId = setInterval(() => {
      const collisionResult = isColliding();
      if (collisionResult === "lose") {
        setAlert(
          <Alert
            style={{
              position: "absolute",
              top: "-100px",
              left: "50%",
              transform: "translateX(-50%)",
            }}
            className="alert"
            severity="error"
          >
            هذه رسالة خطأ.
          </Alert>
        );
        dispatch({ type: "entre" });
        setTimeout(() => {
          setAlert(null);
        }, 3000);
      } else if (collisionResult === "win") {
        setAlert(
          <Alert
            style={{
              position: "absolute",
              top: "-100px",
              left: "50%",
              transform: "translateX(-50%)",
              zIndex: "99999",
            }}
            className="alert"
            severity="info"
          >
            لقد فزت!
          </Alert>
        );
        setTimeout(() => {
          // navigate("/s3");
        }, 3000);
      }
    }, 10);

    const handleKeyDown = (e) => {
      dispatch({ type: e.key });
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      clearInterval(intervalId);
    };
  }, []);
  anime({
    targets: ".x1",
    translateY: 270,
    direction: "reverse",
    loop: true,
    easing: "easeInOutSine",
  });
  return (
    <div className="s4">
      {alert}
      <div className="bac-start"></div>
      <div className="bac-end"></div>
      <div style={style} className="start"></div>
      <div className="x x1 "></div>
      <div className="x x2"></div>
      <div className="x "></div>
    </div>
  );
}
