import React from 'react'

const RandomAdvice = () => {

    const fetchAdvice = async () => {
        const res = await fetch("http://api.adviceslip.com/advice");
        const data = await res.json();
    
        console.log(data);
      };

  return (
    <div>
      <button onClick={fetchAdvice}>Generate one advice</button>
    </div>
  )
}

export default RandomAdvice
