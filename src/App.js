import { useEffect, useState } from "react";
import { Route, Routes, useNavigate, useLocation } from "react-router-dom";
import "./App.css";
import FloorSeven from "./component/Floor-7";
import FloorEighth from "./component/Floor-8/FloorEighth";
import FloorNine from "./component/Floor-9/FloorNine";
import FloorTen from "./component/Floor-10/FloorTen";
import Login from "./component/Login";
import Receptionist from "./component/Receptionist";
import FloorSix from "./component/Floor-6";
import TranNao from "./component/TranNao";
import TranNaoClone from "./component/TranNaoClone";

function App() {
  const router = useNavigate();
  const location = useLocation();
  const [dataOption, setDataOption] = useState();

  useEffect(() => {
    const checkLogin = JSON.parse(localStorage.getItem("login"));
    if (checkLogin) {
      if (location.pathname && !dataOption) {
        router(location.pathname);
        setDataOption(location.pathname.slice(1));
      }
      if (dataOption) {
        router(dataOption);
      }
    } else {
      router("/");
    }
  }, [dataOption, location.pathname, router]);

  const handleLogout = () => {
    router("/");
  };

  return (
    <div className="App">
      <div className="position-relative">
        <div
          className="position-absolute d-flex flex-column align-items-end"
          style={{ top: 10, right: 10, zIndex: 9 }}
        >
          <div style={{ cursor: "pointer" }}>
            <img
              width={120}
              src={require("./assets/logo_nanoco.png")}
              alt=""
              onClick={() =>
                window.location.replace("https://www.nanoco.com.vn/")
              }
            />
            {JSON.parse(localStorage.getItem("login")) && (
              <img
                className="ms-1"
                width={30}
                src={require("./assets/sign-out.png")}
                alt=""
                onClick={handleLogout}
              />
            )}
          </div>
          <select
            className="form-select mt-2"
            aria-label="Default select example"
            value={dataOption}
            onChange={(event) => setDataOption(event.target.value)}
          >
            <option value="receptionist">Lễ Tân</option>
            <option value="tran-nao">Trần Não 1</option>
            <option value="tran-nao-version2">Trần Não 2</option>
            <option value="floor-six">Lầu 6</option>
            <option value="floor-seven">lầu 7</option>
            <option value="floor-eighth">lầu 8</option>
            <option value="floor-ninth">lầu 9</option>
            <option value="floor-ten">lầu 10</option>
          </select>
        </div>

        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/tran-nao" element={<TranNao />} />
          <Route path="/tran-nao-version2" element={<TranNaoClone />} />
          <Route path="/receptionist" element={<Receptionist />} />
          <Route path="/floor-six" element={<FloorSix />} />
          <Route path="/floor-seven" element={<FloorSeven />} />
          <Route path="/floor-eighth" element={<FloorEighth />} />
          <Route path="/floor-ninth" element={<FloorNine />} />
          <Route path="/floor-ten" element={<FloorTen />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
