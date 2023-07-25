import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import {NavLink} from 'react-router-dom';

const Error = () => {
    return (
        <div>
            <Header />
            <main className='error'>
                <h1 className='error-number'>404</h1>
                <p className='first-message-error'>Oups! La page que vous demandez n'existe pas.</p>
                <NavLink to="/"><p className='second-message-error'>Retourner sur la page d’accueil</p></NavLink>
            </main>
            <Footer />
        </div>
    );
};

export default Error;