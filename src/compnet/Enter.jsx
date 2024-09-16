import React from "react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
export default function Enter() {
  const navigate = useNavigate();
  return (
    <div className="enter">
      <img src="p2.jpg" alt="" />
      <Button
        variant="outlined"
        size="large"
        style={{
          padding: " 10px",
          width: "100px",
          borderRadius: "8px",
          fontWeight: "800",
        }}
        onClick={() => {
          navigate("/first");
        }}
      >
        play
      </Button>
    </div>
  );
}
