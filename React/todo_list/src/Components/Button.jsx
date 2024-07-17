// Button component for all buttons there
import React from 'react'

function Button({text, color, onAdd}) {

// const onClick = () => {
//     console.log("clic");
// }
  return (
    <button style={{backgroundColor: color}} className='btn' onClick={onAdd}>
        {text}
    </button>
  )
}

export default Button
