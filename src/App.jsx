import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import First from "./compnet/First";
import Bac from "./compnet/Bac";
import { Routes, Route } from "react-router-dom";
import Enter from "./compnet/Enter";
import Seconde from "./compnet/Seconde";
import S3 from "./compnet/S3";
import PositionProvider from "./context/ContextPosition";
import S4 from "./compnet/S4";
function App() {
  const [count, setCount] = useState(0);
  let devs = [];
  console.log(devs);
  devs.map((e, i) => {
    return i;
  });
  return (
    <>
      <PositionProvider>
        <Routes>
          <Route path="/" element={<Enter />} />
          <Route
            path="/First"
            element={
              <Bac>
                <First />
              </Bac>
            }
          />
          <Route
            path="/seconde"
            element={
              <Bac>
                <Seconde />
              </Bac>
            }
          />

          <Route
            path="/s3"
            element={
              <Bac>
                <S3 />
              </Bac>
            }
          />
          <Route
            path="/s4"
            element={
              <Bac>
                <S4 />
              </Bac>
            }
          />
        </Routes>
      </PositionProvider>
    </>
  );
}

export default App;
