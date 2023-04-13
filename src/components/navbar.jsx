import "./styles/navbar.css";
import 'font-awesome/css/font-awesome.min.css';
import { Link } from "react-router-dom";
import { useContext } from "react";
import globalContext from "../provider/globalContext";
import Sidebar from "./sidebar";

function Navbar(){
    let context = useContext(globalContext);

    
    return (
        // <nav className="navbar navbar-expand-lg bg-body-tertiary">
        //     <div className="nav container-fluid">
        //         <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        //             <span className="navbar-toggler-icon"></span>
        //         </button>
        //         <div className="collapse navbar-collapse" id="navbarSupportedContent">
        //             <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        //                 <li className="nav-item">
        //                     <Link className="nav-link active" to="/catalog">Catalog</Link>
        //                 </li>
        //                 <li className="nav-item">
        //                     <Link className="nav-link active" to="/about">About Us</Link>
        //                 </li>
        //                 <li className="nav-item">
        //                     <Link className="nav-link active" to="/admin">Admin</Link>
        //                 </li>
        //             </ul>
        //             <Link className="navbar-brand" to="/">Online Store</Link>
        //             <form className="d-flex" role="search">
        //                 <Link className="btn btn-outline-success cart" to="/cart">
        //                     <span className="badge text-bg-light">{context.getNumOfProducts()}</span>
        //                     Cart
        //                 </Link>
        //             </form>
        //         </div>
        //     </div>
        // </nav>
        <nav className="navigation">
            <div className="menu">
                <div className="left">
                    <Sidebar pageWrapId={'page-wrap'} outerContainerId={'outer-container'}/>
                </div>
                <div className="middle">
                    <Link className="navbar-brand main-title" to="/">Online Store</Link>
                </div>
                <div className="right">
                    <div>
                        <i className="fa fa-user fa-lg"></i>
                    </div>
                    <div>
                        <Link className="btn btn-light cart" to="/cart">
                            <span className="badge text-bg-light">{context.getNumOfProducts()}</span>
                            <i className="fa fa-shopping-cart" aria-hidden="true"></i>
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
}
export default Navbar;