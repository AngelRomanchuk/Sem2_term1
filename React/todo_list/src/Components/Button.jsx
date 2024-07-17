// Button component for all buttons there
import React from 'react'

function Button({text, color, onClick}) {

// const onClick = () => {
//     console.log("clic");
// }
  return (
    <button style={{backgroundColor: color}} className='btn' onClick={onClick}>
        {text}
    </button>
  )
}

export default Button
