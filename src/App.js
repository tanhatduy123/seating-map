import { useEffect, useState } from "react";
import { Route, Routes, useNavigate, useLocation } from "react-router-dom";
import "./App.css";
import FloorSeven from "./component/Floor-7";
import FloorEighth from "./component/Floor-8/FloorEighth";
import FloorNine from "./component/Floor-9/FloorNine";

function App() {
  const router = useNavigate();
  const location = useLocation();
  const [dataOption, setDataOption] = useState();

  useEffect(() => {
    if (location.pathname && !dataOption) {
      router(location.pathname);
      setDataOption(location.pathname.slice(1));
    }
    if (dataOption) {
      router(dataOption);
    }
  }, [dataOption, location.pathname, router]);

  return (
    <div className="App">
      <div className="position-relative">
        <div
          className="position-absolute d-flex flex-column align-items-end"
          style={{ top: 10, right: 10 }}
        >
          <img width={120} src={require("./assets/logo_nanoco.png")} alt="" />
          <select
            className="form-select mt-2"
            aria-label="Default select example"
            style={{ zIndex: 9 }}
            value={dataOption}
            onChange={(event) => setDataOption(event.target.value)}
          >
            <option value="floor-seven">lầu 7</option>
            <option value="floor-eighth">lầu 8</option>
            <option value="floor-ninth">lầu 9</option>
          </select>
        </div>

        <Routes>
          <Route path="/floor-seven" element={<FloorSeven />} />
          <Route path="/floor-eighth" element={<FloorEighth />} />
          <Route path="/floor-ninth" element={<FloorNine />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
