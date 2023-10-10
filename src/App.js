import { Route, Routes } from "react-router-dom";
import "./App.css";
import FloorSeven from "./component/Floor-7";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<FloorSeven />} />
      </Routes>
    </div>
  );
}

export default App;
