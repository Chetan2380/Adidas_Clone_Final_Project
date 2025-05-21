import logo from './logo.svg';
import './App.css';
import {Routes, Route} from "react-router-dom";
import Home from './components/Home/Home';
import Mens from './components/Mens/Mens';
import Womens from './components/Womens/Womens';
import Kids from './components/Kids/Kids';
import Login from './components/Register_Login/Login';
import Cart from './components/Cart/Cart';
import Register from './components/Register_Login/Register';
import Profile from './components/Profile/Profile';

function App() {
  return (
    <div className="App">
      
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/men" element={<Mens/>}/>
        <Route path="/women" element={<Womens/>}/>
        <Route path="/kids" element={<Kids/>}/>
        <Route path="/sign-in" element={<Login/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/sign-up" element={<Register/>}/>
        <Route path="/profile" element={<Profile/>}/>
      </Routes>
    </div>
  );
}

export default App;
