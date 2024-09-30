import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Alert } from "@mui/material";
import isColliding from "./logic";
import { usePosition } from "../context/ContextPosition";
import Nav from "./Nav";

export default function Seconde() {
  const { position, dispatch } = usePosition();
  const [alert, setAlert] = useState(null);
  const navigate = useNavigate();
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    dispatch({
      type: "entre",
    });
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
          setCounter(0);

          navigate("/s3");
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

  const style = {
    position: "absolute",
    top: `${position.t}px`,
    left: `${position.l}px`,
  };

  return (
    <div className="seconde">
      {alert}
      <Nav niveau={2} counter={counter} />
      <div className="bac-start"></div>
      <div className="bac-end"></div>
      <div style={style} className="start"></div>
      <div>
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
