import React from "react";
import { is } from "../../compnet/logic";
export default function rediuserPosition(prev, action) {
  let arr = { t: [0, 0], l: [0, 0] }; // [{ t: [0 ,210 ], l: [ 40, 50]},{ t: [90 ,300 ], l: [ 440 , 450]} ]

  if (is(action.type)) {
    arr = is(action.type);
  }

  switch (action.type) {
    case "entre":
      return {
        t: 140, // Initial vertical position
        l: 15, // Initial horizontal position
      };
    case "ArrowUp":
      if (prev.l < arr.l[1] && prev.l + 20 > arr.l[0]) {
        return prev.t - 4 > arr.t[1] || prev.t - 4 < arr.t[0]
          ? prev.t - 4 > 0
            ? { ...prev, t: prev.t - 4 }
            : { ...prev, t: 0 }
          : { ...prev, t: arr.t[1] };
      }
      return prev.t - 4 > 0 ? { ...prev, t: prev.t - 4 } : { ...prev, t: 0 };
      break;
    case "ArrowDown":
      if (prev.l < arr.l[1] && prev.l + 20 > arr.l[0]) {
        return prev.t + 4 < arr.t[0] - 20 || prev.t + 4 > arr.t[1]
          ? prev.t + 4 < 280
            ? { ...prev, t: prev.t + 4 }
            : { ...prev, t: 280 }
          : { ...prev, t: arr.t[0] - 20 };
      }

      return prev.t + 4 < 280
        ? { ...prev, t: prev.t + 4 }
        : { ...prev, t: 280 };
    case "ArrowLeft":
      if (prev.t < arr.t[1] && prev.t > arr.t[0] - 20) {
        return prev.l - 4 > arr.l[1] || prev.l - 4 < arr.l[0]
          ? prev.l - 4 > 0
            ? { ...prev, l: prev.l - 4 }
            : { ...prev, l: 0 }
          : { ...prev, l: arr.l[1] };
      }
      return prev.l - 4 > 0 ? { ...prev, l: prev.l - 4 } : { ...prev, l: 0 };
    case "ArrowRight":
      if (prev.t < arr.t[1] && prev.t > arr.t[0] - 20) {
        return prev.l + 20 + 4 < arr.l[0] || prev.l + 4 > arr.l[1]
          ? prev.l + 4 < 480
            ? { ...prev, l: prev.l + 4 }
            : { ...prev, l: 480 }
          : { ...prev, l: arr.l[0] - 20 };
      }

      return prev.l + 4 < 480
        ? { ...prev, l: prev.l + 4 }
        : { ...prev, l: 480 };
    default:
      return prev;
  }
}
