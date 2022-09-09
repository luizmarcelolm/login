import { Fragment } from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import {Login} from "../pages/Login";
import {Register} from "../pages/Register";
import {Home} from "../pages/Home";


const Private = ({ Item }) => {
   const { signed } = false;
 
   return signed > 0 ? <Item /> : <Login />;
 };
 

export const AppRouter = () => {
    return (
       <Router>
         <Fragment>
           <Routes>
             <Route exact path="/Home" element={<Private Item={Home} />} />
             <Route path="/" element={<Login />} />
             <Route exact path="/Register" element={<Register />} />
             <Route path="*" element={<Login />} />
           </Routes>
         </Fragment>
       </Router>
    );
};