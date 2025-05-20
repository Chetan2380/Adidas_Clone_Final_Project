import logo from './logo.svg';
import './App.css';
import {Routes, Route} from "react-router-dom";
import Home from './components/Home/Home';
import Mens from './components/Mens/Mens';
import Womens from './components/Womens/Womens';
import Kids from './components/Kids/Kids';
import Login from './components/Register_Login/Login';

function App() {
  return (
    <div className="App">
      
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/men" element={<Mens/>}/>
        <Route path="/women" element={<Womens/>}/>
        <Route path="/kids" element={<Kids/>}/>
        <Route path="/sign-in" element={<Login/>}/>
      </Routes>
    </div>
  );
}

export default App;
