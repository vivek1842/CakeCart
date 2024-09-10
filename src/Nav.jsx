import {  Link } from "react-router-dom";

const Nav = () =>{
    return(
        
        <div className="nav-bar">
            <Link to='/'>
                <li>Home</li>
            </Link>
            
            <button type="button">Log Out</button>
        </div>
        
    )
}

export default Nav;