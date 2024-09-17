import React from "react";
import { usePosition } from "../context/ContextPosition";
import { useEffect, useState } from "react";
import isColliding from "./logic";
import { Alert } from "@mui/material";
import { useNavigate } from "react-router-dom";
import anime from "animejs/lib/anime.es";
import "../style/s4.css";
export default function () {
  const { position, dispatch } = usePosition();
  const [alert, setAlert] = useState(null);
  const navigate = useNavigate();
  let style = {
    position: "absolute",
    top: `${position.t}px` || "140px",
    left: `${position.l}px` || "20px",
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
      dispatch({
        type: e.key,
        payload: [
          { t: [0, 210], l: [40, 50] },
          { t: [90, 300], l: [440, 450] },
        ],
      });
    };

    document.addEventListener("keydown", handleKeyDown);

    let group = document.getElementsByClassName("x");
    let top = 1;
    for (let i = 0; i < group.length; i++) {
      const element = group[i];
      element.style.top = `${top}px`;
      top += 39;
    }
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div className="s4">
      {alert}
      <div className="bac-start"></div>
      <div className="m1 m"></div>
      <div className="m2 m"></div>

      <div className="bac-end"></div>
      <div style={style} className="start">
        <span className="start-spam"></span>
      </div>
      <div className="dd">
        <div className="x  xxx"></div>
        <div className="x xx "></div>
        <div className="x xxx"></div>
        <div className="x xx "></div>
        <div className="x xxx"></div>
        <div className="x xx"></div>
        <div className="x xxx"></div>
        <div className="x xx"></div>
      </div>
    </div>
  );
}
