import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
    return (
        <div className="navigation">
            <img src="logoKasa.png" alt="Logo Kasa" />
            <ul>
                <NavLink to="/">
                    <li>Accueil</li>
                </NavLink>
                <NavLink to="/about">
                    <li>A propos</li>
                </NavLink>
            </ul>
        </div>
    );
};

export default Navigation;