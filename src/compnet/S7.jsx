import React from "react";
import { usePosition } from "../context/ContextPosition";
import { useEffect, useState } from "react";
import isColliding, { reseteJ } from "./logic";
import { Alert } from "@mui/material";
import { useNavigate } from "react-router-dom";
import "../style/s7.css";
import { isSV } from "./logic";
import Nav from "./Nav";

export default function S7() {
  const [j, setJ] = useState(0);
  const { position, dispatch } = usePosition();
  const [alert, setAlert] = useState(null);
  const [refresh, setREfresh] = useState({
    t: 2.5,
    l: 5,
  });
  const [counter, setCounter] = useState(0);
  const navigate = useNavigate();
  let style = {
    position: "absolute",
    top: `${position.t}px` || "140px",
    left: `${position.l}px` || "20px",
  };
  useEffect(() => {
    dispatch({
      type: "rest",
      payload: {
        t: 2.5,
        l: 5,
      },
    });
  }, []);
  useEffect(() => {
    const intervalId = setInterval(() => {
      const collisionResult = isColliding();
      if (collisionResult === "lose") {
        reseteJ();
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

        dispatch({
          type: "rest",
          payload: refresh,
        });
        setCounter((e) => e + 1);
        setTimeout(() => {
          setAlert(null);
        }, 3000);
      } else if (collisionResult == "sv") {
        setREfresh({
          t: isSV().t[0],
          l: isSV().l[0],
        });
      } else if (
        collisionResult === "win" &&
        j == document.getElementsByClassName("j").length
      ) {
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
          navigate("/s8");
        }, 3000);
      } else if (collisionResult === "j") {
        setJ((e) => {
          return e + 1;
        });
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
  }, [j, refresh]);
  return (
    <div className="s7">
      {alert}
      <Nav niveau={7} counter={counter} />
      <div className="bac-start sv"></div>
      <div className="bac-end sv"></div>
      <div className="start" style={style}>
        <span className="start-spam"></span>
      </div>
      <div className="m1 m"></div>
      <div className="m2 m"></div>
      <div className="v1 sv"></div>
      <div className="j"></div>
      <div className=" j1 j "></div>
      <div className=" j2 j"></div>
      <div className=" j3 j"></div>

      <div className="dd">
        <div className="dx">
          <div className="dxx">
            <div className="x"></div>
            <div className="x"></div>
            <div className="x"></div>
            <div className="x"></div>
            <div className="x"></div>
          </div>
          <div className="dxx">
            <div className="x"></div>
            <div className="x"></div>
            <div className="x"></div>
            <div className="x"></div>
            <div className="x"></div>
          </div>
        </div>
        <div className="dx">
          <div className="dxx">
            <div className="x"></div>
            <div className="x"></div>
            <div className="x"></div>
            <div className="x"></div>
            <div className="x"></div>
          </div>
          <div className="dxx">
            <div className="x"></div>
            <div className="x"></div>
            <div className="x"></div>
            <div className="x"></div>
            <div className="x"></div>
          </div>
        </div>
        <div className="dx">
          <div className="dxx">
            <div className="x"></div>
            <div className="x"></div>
            <div className="x"></div>
            <div className="x"></div>
            <div className="x"></div>
          </div>
          <div className="dxx">
            <div className="x"></div>
            <div className="x"></div>
            <div className="x"></div>
            <div className="x"></div>
            <div className="x"></div>
          </div>
        </div>
        <div className="dx">
          <div className="dxx">
            <div className="x"></div>
            <div className="x"></div>
            <div className="x"></div>
            <div className="x"></div>
            <div className="x"></div>
          </div>
          <div className="dxx">
            <div className="x"></div>
            <div className="x"></div>
            <div className="x"></div>
            <div className="x"></div>
            <div className="x"></div>
          </div>
        </div>
        <div className="dx">
          <div className="dxx">
            <div className="x"></div>
            <div className="x"></div>
            <div className="x"></div>
            <div className="x"></div>
            <div className="x"></div>
          </div>
          <div className="dxx">
            <div className="x"></div>
            <div className="x"></div>
            <div className="x"></div>
            <div className="x"></div>
            <div className="x"></div>
          </div>
        </div>
        <div className="dx">
          <div className="dxx">
            <div className="x"></div>
            <div className="x"></div>
            <div className="x"></div>
            <div className="x"></div>
            <div className="x"></div>
          </div>
          <div className="dxx">
            <div className="x"></div>
            <div className="x"></div>
            <div className="x"></div>
            <div className="x"></div>
            <div className="x"></div>
          </div>
        </div>
        <div className="dx">
          <div className="dxx">
            <div className="x"></div>
            <div className="x"></div>
            <div className="x"></div>
            <div className="x"></div>
            <div className="x"></div>
          </div>
          <div className="dxx">
            <div className="x"></div>
            <div className="x"></div>
            <div className="x"></div>
            <div className="x"></div>
            <div className="x"></div>
          </div>
        </div>
        <div className="dx">
          <div className="dxx">
            <div className="x"></div>
            <div className="x"></div>
            <div className="x"></div>
            <div className="x"></div>
            <div className="x"></div>
          </div>
          <div className="dxx">
            <div className="x"></div>
            <div className="x"></div>
            <div className="x"></div>
            <div className="x"></div>
            <div className="x"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
