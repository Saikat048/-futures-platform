import './App.css';
import Navbar from './Pages/Share/Navbar';
import { Routes, Route } from "react-router-dom";
import Solution from './Pages/Solution/Solution';
import Futures from './Pages/Home/Futures'; 
import Contact from './Pages/About/Contact';
import Management from './Pages/About/Management';
import Login from './Pages/Login/Login';
import Signup from './Pages/Login/Signup';
import RequireAuth from './Pages/Share/RequireAuth';

function App() {
  return (
    <div>
      <Navbar></Navbar>

      <Routes>
        <Route path="/" element={<Futures></Futures>}></Route>
        <Route path="/futures" element={<Futures></Futures>}></Route>
        <Route path="/solution" element={ 
          <Solution></Solution>}></Route>
        {/* <Route path="/solution" element={<RequireAuth>
          <Solution></Solution>
        </RequireAuth>}></Route> */}
        <Route path="/contact" element={<Contact></Contact>}></Route>
        <Route path="/management" element={<Management></Management>}></Route> 
        <Route path="/login" element={<Login></Login>}></Route> 
        <Route path="/signup" element={<Signup></Signup>}></Route> 
      </Routes>
    </div>
  );
}

export default App;
