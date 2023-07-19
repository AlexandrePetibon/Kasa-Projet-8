import React from 'react';

const Banner = ({dimBanner, picture}) => {
    return (
        <div className={`${dimBanner}`}>
            <img className="banner-home" src={picture} alt="" />
        </div>
    );
};

export default Banner;