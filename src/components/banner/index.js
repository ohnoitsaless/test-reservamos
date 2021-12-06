import React from 'react';
import './styles.css'

function Banner(props) {
  const {title} = props;

  return (
    <div className="banner">
      <h2>{title}</h2>
    </div>
  )
}

export default Banner;
