import React from "react";

export default function rediuserPosition(prev, action) {
  switch (action.type) {
    case "entre":
      return {
        t: 140, // Initial vertical position
        l: 15, // Initial horizontal position
      };
    case "ArrowUp":
      return prev.t - 4 > 0 ? { ...prev, t: prev.t - 4 } : { ...prev, t: 0 };
      break;
    case "ArrowDown":
      return prev.t + 4 < 280
        ? { ...prev, t: prev.t + 4 }
        : { ...prev, t: 280 };
    case "ArrowLeft":
      return prev.l - 4 > 0 ? { ...prev, l: prev.l - 4 } : { ...prev, l: 0 };
    case "ArrowRight":
      return prev.l + 4 < 480
        ? { ...prev, l: prev.l + 4 }
        : { ...prev, l: 480 };
    default:
      break;
  }
}
