import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Wheather from "./components/wheather";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Wheather />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
