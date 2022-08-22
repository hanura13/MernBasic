import React from 'react';
import './index.scss';

const MyInput = ({label, ...rest}) => {
  return (
    <div className="input-wrapper">
        <p className="label">{label}</p>
        <input className="input" placeholder="place-holder" {...rest} />
    </div>
  )
}

export default MyInput;