import { Route, Routes } from "react-router-dom";
import "./App.css";
import Main from "./component/Main";

function App() {
  return (
    <div className="">
      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
    </div>
  );
}

export default App;
