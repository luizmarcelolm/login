import { Fragment } from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {Login} from "../pages/Login";
import {Register} from "../pages/Register";
import {Home} from "../pages/Home";

export const AppRouter = () => {
    return (
       <BrowserRouter>
         <Fragment>
           <Routes>
           <Route exact path="/home" element={<Home />} />
             <Route path="/" element={<Login />} />
             <Route path="/register" element={<Register />} />
             <Route path="/" element={<Register />} />
             <Route path="*" element={<Login />} />
           </Routes>
         </Fragment>
       </BrowserRouter>
    );
};