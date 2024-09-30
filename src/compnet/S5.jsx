import React from "react";
import { usePosition } from "../context/ContextPosition";
import { useEffect, useState } from "react";
import isColliding from "./logic";
import { Alert } from "@mui/material";
import { useNavigate } from "react-router-dom";

import "../style/s5.css";
import Nav from "./Nav";
export default function S5() {
  const [j, setJ] = useState(false);
  const { position, dispatch } = usePosition();
  const [alert, setAlert] = useState(null);
  const navigate = useNavigate();
  let style = {
    position: "absolute",
    top: `${position.t}px` || "140px",
    left: `${position.l}px` || "20px",
  };
  const [counter, setCounter] = useState(0);
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
        setCounter((e) => e + 1);
        setTimeout(() => {
          setAlert(null);
        }, 3000);
      } else if (collisionResult === "win" && j == true) {
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
          setCounter(0);
          navigate("/s6");
        }, 3000);
      } else if (collisionResult === "j") {
        setJ(true);
      }
    }, 10);

    const handleKeyDown = (e) => {
      dispatch({
        type: e.key,
      });
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      clearInterval(intervalId);
    };
  }, [j]);
  return (
    <div className="s5">
      {alert}
      <Nav niveau={5} counter={counter} />
      <div className="bac-start"></div>
      <div className="m1 m"></div>
      <div className="m2 m"></div>
      <div className="m3 m"></div>
      <div className="m4 m"></div>
      <div className="m5 m"></div>
      <div className="m6 m"></div>
      <div className="bac-end"></div>
      <div style={style} className="start">
        <span className="start-spam"></span>
      </div>
      <div className="j"></div>
      <div className="dd">
        <div className="x"></div>
        <div className="x"></div>
        <div className="x"></div>
        <div className="x"></div>
        <div className="x"></div>
        <div className="x"></div>
        <div className="x"></div>
        <div className="x"></div>
        <div className="x"></div>
      </div>
    </div>
  );
}
