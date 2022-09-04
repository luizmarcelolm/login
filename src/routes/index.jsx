import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import {Login} from "../pages/Login";
import {Register} from "../pages/Register";


export const AppRouter = () => {
    return (
       <Router>
          <Routes>
             <Route path = "/login" element = {<Login />} />
             <Route path ="/Register" element = {<Register />} />
          </Routes>
       </Router>
    );
};