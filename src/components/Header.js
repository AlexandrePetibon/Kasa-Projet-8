import React from "react";
import "../Styles/index.scss" ;
import logoKasa from "../assets/logoKasa.png" ;
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <div className="header">
        <img src={logoKasa} alt="Logo de Kasa" />
        <div className="navigation">
            <nav>
                <NavLink to="/">
                    <div>Accueil</div>
                </NavLink>
                <NavLink to="/about">
                    <div>A propos</div>
                </NavLink>
            </nav>
        </div>
    </div>

  );
};

export default Header;
