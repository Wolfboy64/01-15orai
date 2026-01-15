//use navlink enad import
import { NavLink } from 'react-router-dom'
//import bootstrap for styling


const Navbar = () => {
 
    return ( 
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
                        <NavLink className="navbar-brand" to="/">MyApp</NavLink>
            
            <div className="container">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <NavLink className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} to="/">Home</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}  to="/about">About</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} to="/contact">Contact</NavLink>
                    </li>
                </ul>
            </div>
        </nav>
     );
}
export default Navbar;