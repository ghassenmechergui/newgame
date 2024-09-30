import React, { useState, useEffect } from "react";
import Alert from "@mui/material/Alert";
import { useNavigate } from "react-router-dom";
import isColliding from "./logic";
import { usePosition } from "../context/ContextPosition";
import Nav from "./Nav";
export default function First() {
  const { position, dispatch } = usePosition();

  const [alert, setAlert] = useState(null);
  const navigate = useNavigate();
  const [counter, setCounter] = useState(0);
  const [niveau, setNiveau] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      if (isColliding() == "lose") {
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
            This is an error Alert.
          </Alert>
        );
        dispatch({
          type: "entre",
        });
        setCounter((e) => e + 1);
        setTimeout(() => {
          setAlert(null);
        }, 3000);
      } else if (isColliding() == "win") {
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
            This is an info Alert.
          </Alert>
        );

        setTimeout(() => {
          setCounter(0);
          navigate("/seconde");
        }, 3000);
      }
    }, 10);

    // Add event listener
    document.addEventListener("keydown", (e) => {
      dispatch({ type: e.key });
    });

    // Cleanup
    return () => {
      document.removeEventListener("keydown", (e) => {
        dispatch({ type: e.key });
      });
      clearInterval(interval);
    };
  }, []); // Dependency array to avoid infinite loops

  const style = {
    position: "absolute",
    top: `${position.t}px`,
    left: `${position.l}px`,
  };

  return (
    <div className="first">
      <Nav niveau={niveau} counter={counter} />
      <div className="bac-start"></div>
      <div className="bac-end"></div>
      <div style={style} className="start"></div>
      <div>
        <div className="x"></div>
        <div className="x"></div>
      </div>
      {alert}
    </div>
  );
}
