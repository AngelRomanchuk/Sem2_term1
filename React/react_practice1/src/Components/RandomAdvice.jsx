import React from 'react'
import { useState } from 'react';

const RandomAdvice = () => {
  const [advice, setAdvice] = useState('');

  const fetchAdvice = async () => {
    const response = await fetch('https://api.adviceslip.com/advice');
    const jsonData = await response.json();
    setAdvice(jsonData.slip.advice);
  };

  return (
    <div className='advice'>
      <div className='advice_randomizer'>
        <p className='bold_gray'>One Advice</p>
        <button onClick={fetchAdvice}>Generate one advice</button>
      </div>
      <div>
        <p>{advice}</p>
      </div>
    </div>
  );
};

export default RandomAdvice;
