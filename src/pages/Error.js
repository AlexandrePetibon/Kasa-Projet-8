import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Error = () => {
    return (
        <div>
            <Header />
            <main className='error'>
                <p className='error-number'>404</p>
                <p className='first-message-error'>Oups! La page que vous demandez n'existe pas.</p>
                <p className='second-message-error'>Retourner sur la page d’accueil</p>
            </main>
            <Footer />
        </div>
    );
};

export default Error;