import { Route, Routes } from "react-router-dom";
import "./App.css";
import SigninComp from "./components/SigninComp";
import SignupComp from "./components/SignupComp";
import MainComp from "./components/MainComp";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<MainComp />} />
        <Route path="/signin" element={<SigninComp />} />
        <Route path="/signup" element={<SignupComp />} />
      </Routes>
    </div>
  );
}

export default App;
