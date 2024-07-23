import React from 'react'
import RandomAdvice from './RandomAdvice';
import AdviceList from './AdviceList';

const Navigation = () => {
  return (
    <div className='advice_randomizer'>
      <RandomAdvice />
      <AdviceList />
    </div>
  )
}

export default Navigation
