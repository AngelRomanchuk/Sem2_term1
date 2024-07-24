import React, { useState } from 'react';

const AdviceList = () => {
  const [advices, setAdvices] = useState([]);
  const [numAdvices, setNumAdvices] = useState(5); //five as a defoult

  const fetchAdvices = async () => {
    const urls = Array.from({ length: numAdvices }, () => 'https://api.adviceslip.com/advice');
    const responses = await Promise.all(urls.map(url => fetch(url)));
    const jsonPromises = responses.map(response => response.json());
    const data = await Promise.all(jsonPromises);
    
    const adviceArray = data.map(item => item.slip.advice);
    setAdvices(adviceArray);
  };

  const handleInputChange = (event) => {
    const value = parseInt(event.target.value, 6);
    if (!isNaN(value)) {
      setNumAdvices(value);
    }
  };


  return (
    <div className='advice'>
      <div>
        <label htmlFor="numAdvicesInput" className='bold_gray'>Number of advices:</label>
        <input
          id="numAdvicesInput"
          type="number"
          value={numAdvices}
          onChange={handleInputChange}
          min="1"
          max="6"
        />
        <button onClick={fetchAdvices}>Generate advices</button>
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