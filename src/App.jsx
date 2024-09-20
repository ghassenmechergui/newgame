import "./App.css";
import First from "./compnet/First";
import Bac from "./compnet/Bac";
import { Routes, Route } from "react-router-dom";
import Enter from "./compnet/Enter";
import Seconde from "./compnet/Seconde";
import S3 from "./compnet/S3";
import PositionProvider from "./context/ContextPosition";
import S4 from "./compnet/S4";
import S5 from "./compnet/S5";
import S6 from "./compnet/S6";
import S7 from "./compnet/S7";
import S8 from "./compnet/S8";
function App() {
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
          <Route
            path="/s5"
            element={
              <Bac>
                <S5 />
              </Bac>
            }
          />
          <Route
            path="/s6"
            element={
              <Bac>
                <S6 />
              </Bac>
            }
          />
          <Route
            path="/s7"
            element={
              <Bac>
                <S7 />
              </Bac>
            }
          />
          <Route
            path="/s8"
            element={
              <Bac>
                <S8 />
              </Bac>
            }
          />
        </Routes>
      </PositionProvider>
    </>
  );
}

export default App;
