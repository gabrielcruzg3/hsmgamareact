import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import PrivateRoutes from "./private.routes";

import Home from "./view/Home";
import Courses from "./view/Courses"
import SignIn from "./view/SignIn";
import SignUp from "./view/SignUp";
import Dashboard from "./view/Dashboard";

    const Router: React.FC = () => {
        return (
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/courses" element={<Courses />} />
                    <Route path="/signin" element={<SignIn />} />
                    <Route path="/signup" element={<SignUp />} />
                    <Route path="/dashboard" element={<Dashboard />} />
                    
                </Routes>            
            </BrowserRouter>
        );
    }

    export default Router;