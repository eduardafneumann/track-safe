import React, { useState } from 'react';

function  Input({ name, type,  value, handleChange }) {  
  return (
    <div className='input-area'>
      <input className='input' id={name} name={name} type={type} value={value} onChange={handleChange} />
    </div>
  );
}

export default Input;