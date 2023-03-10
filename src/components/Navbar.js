import { Link } from "react-router-dom";
import './CakeDetails/CakeDetails';


const Navbar = () => {

    return (
        <nav className="navbar">
            <h1 className="navTitle">Cake Shop</h1>
            <div className="navLinks">
                <Link to="/">Home</Link>
                <Link to="/cakes">Cakes</Link>
            </div>
        </nav>
    );
}

export default Navbar;
