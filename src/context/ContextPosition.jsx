import { createContext } from "react";
import { useContext } from "react";
import { useReducer } from "react";
import rediuserPosition from "../assets/reduser/rediuserPosition";
export const Position = createContext({});
export default function PositionProvider({ children }) {
  const [position, dispatch] = useReducer(rediuserPosition, {
    t: 140, // Initial vertical position
    l: 15, // Initial horizontal position
  });

  return (
    <Position.Provider value={{ position, dispatch }}>
      {children}
    </Position.Provider>
  );
}

export let usePosition = () => {
  return useContext(Position);
};
