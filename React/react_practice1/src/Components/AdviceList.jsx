import React, { useState } from 'react';

const AdviceList = () => {
  const [advices, setAdvices] = useState([]);

  const fetchAdvices = async () => {
    const responses = await Promise.all([
    fetch('https://api.adviceslip.com/advice'),
    fetch('https://api.adviceslip.com/advice'),
    fetch('https://api.adviceslip.com/advice'),
    fetch('https://api.adviceslip.com/advice'),
    fetch('https://api.adviceslip.com/advice')
    ]);

    const jsonPromises = responses.map(response => response.json());
    const data = await Promise.all(jsonPromises);
    
    const adviceArray = data.map(item => item.slip.advice);
    setAdvices(adviceArray);
  };

  return (
    <div className='advice'>
      <div>
        <button onClick={fetchAdvices}>Generate five advices</button>
      </div>
      <div>
        <ul>
          {advices.map((advice, index) => (
            <li key={index}>{advice}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AdviceList;