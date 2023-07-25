import React, {useState} from 'react';
import arrow from "../assets/arrow.png";

const Collapse = ({title, content}) => {
  const [collapse, setCollapse] = useState(true);

  const toggleCollapse = () => {
    setCollapse(!collapse);
  };

  return (
    <div onClick={toggleCollapse}>
      <h3 className='about-collapse-title'>
        {title}
        <img className="arrow-collapse" src={arrow} alt="Arrow" />
      </h3>
      {collapse ? null : <p className='text-collapse-about'>{content}</p>}
    </div>
  );
};

export default Collapse;