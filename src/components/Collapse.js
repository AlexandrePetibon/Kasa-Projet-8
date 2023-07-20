import React, { useState } from 'react';

const Collapse = ({ title, content }) => {
  const [collapse, setCollapse] = useState(true);

  const toggleCollapse = () => {
    setCollapse(!collapse);
  };

  return (
    <div onClick={toggleCollapse}>
      <h3>{title}</h3>
      {collapse ? null : <p>{content}</p>}
    </div>
  );
};

export default Collapse;