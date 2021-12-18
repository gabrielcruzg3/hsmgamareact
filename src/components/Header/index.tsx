import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { IGlobalState } from "../../store/modules/user/types";
import { NavBar } from "./style";

const Header: React.FC = () => {
    const state = useSelector((state: IGlobalState) => state.users)
    
    return (
        <div>
            <NavBar>
                <div className="nav-links">
                    <Link to="/"> Home</Link>
                    { state.length >= 1 && (<Link to="/dashboard"> Dashboard</Link>)}
                    <Link to="/courses" > Cursos</Link>
                    <Link to="/signup" > Create account</Link>
                    <Link to="/signin" > LogIn</Link>
                    
                </div>
                
            </NavBar>       
        </div>
    )
}

export default Header;