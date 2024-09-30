import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Alert } from "@mui/material";
import isColliding from "./logic";
import usePagination from "@mui/material/usePagination/usePagination";
import { usePosition } from "../context/ContextPosition";
import Nav from "./Nav";
export default function S3() {
  const { position, dispatch } = usePosition();
  const [counter, setCounter] = useState(0);
  const [alert, setalert] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    dispatch({
      type: "entre",
    });
  }, []);
  useEffect(() => {
    let x = setInterval(() => {
      if (isColliding() == "lose") {
        setalert(
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
          setalert(null);
        }, 3000);
      } else if (isColliding() == "win") {
        setalert(
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
            This is an error Alert.
          </Alert>
        );
        setTimeout(() => {
          setCounter(0);
          navigate("/s4");
        }, 3000);
      }
    }, 10);

    // إضافة مستمع للأحداث
    document.addEventListener("keydown", (e) => {
      dispatch({ type: e.key });
    });

    // تنظيف المستمع عند إلغاء المكون
    return () => {
      document.removeEventListener("keydown", (e) => {
        dispatch({ type: e.key });
      });
      clearInterval(x);
    };
  }, []);

  let style = {
    position: "absolute",
    top: `${position.t}px`,
    left: `${position.l}px`,
  };
  return (
    <div className="s3">
      <Nav niveau={3} counter={counter} />
      <div className="bac-start"></div>
      <div className="bac-end"></div>
      <div style={style} className="start"></div>
      <div className="s3-x">
        <div className="x"></div>
        <div className="x"></div>
        <div className="x"></div>
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
      {alert}
    </div>
  );
}
