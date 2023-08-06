import { Route, Routes } from "react-router-dom";
import "./App.css";
import SigninComp from "./components/SigninComp";
import SignupComp from "./components/SignupComp";
import MainComp from "./components/MainComp";
import PrivateComp from "./components/PrivateComp/PrivateComp";
import TodoComp from "./components/PrivateComp/TodoComp";

function App() {
  return (
    <div className="flex justify-center">
      <Routes>
        <Route path="/" element={<MainComp />} />
        <Route path="/signin" element={<SigninComp />} />
        <Route path="/signup" element={<SignupComp />} />
        <Route element={<PrivateComp />}>
          <Route path="/todo" element={<TodoComp />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
