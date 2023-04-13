import {slide as Menu} from 'react-burger-menu';
import { Link } from "react-router-dom";
import './styles/sidebar.css';

function Sidebar(){
    return(
        <Menu>
            <Link className="nav-link active" to="/catalog">Catalog</Link>
            <Link className="nav-link disabled" to="/about">About Us</Link>
            <Link className="nav-link active" to="/admin">Admin</Link>
        </Menu>
    );
}
export default Sidebar;