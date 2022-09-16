 import './App.css';
import Navbar from './Pages/Share/Navbar';
import { Routes, Route } from "react-router-dom";
import Solution from './Pages/Solution/Solution';

function App() {
  return (
    <div>
      <Navbar></Navbar>
    
    <Routes>
    <Route path="/" element={<Solution></Solution>}></Route>
    <Route path="/solution" element={<Solution></Solution>}></Route>
    </Routes>
    </div>
  );
}

export default App;
