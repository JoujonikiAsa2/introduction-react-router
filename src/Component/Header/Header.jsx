import { Link } from "react-router-dom";
import './header.css'
const Header = () => {
    return (
        <div>
            <nav>
                <span>My website</span>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>
                <Link to="/users">Users</Link>
                <Link to="/posts">Posts</Link>
            </nav>

        </div>
    );
};

export default Header;