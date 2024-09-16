import React, { useState, useEffect } from "react";
import Alert from "@mui/material/Alert";
import { useNavigate } from "react-router-dom";
import isColliding from "./logic";
import { usePosition } from "../context/ContextPosition";
export default function First() {
  const { position, dispatch } = usePosition();

  const [alert, setAlert] = useState(null);
  const navigate = useNavigate();

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
