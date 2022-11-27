import "./NavBar.css"

import { CartWidget } from "../cartWidget/CartWidget";

const NavBar = () => {
    return (
        <div className="navbar-container">
            <div className="container-logo"></div>
            <div>
                <img className="logo-navbar" src="https://res.cloudinary.com/dldvgt3pe/image/upload/v1669436420/profileIcon_6qkhbr2h16951_gixg27.png" alt="" />
            </div>
            <ul className="navbar">
                <li className="navbar-item">Instrumentos</li>
                <li className="navbar-item">Bajos nacionales</li>
                <li className="navbar-item">Bajos importados</li>
            </ul>
            <CartWidget/>
        </div>
    )
}

export default NavBar;