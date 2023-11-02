import React from 'react'

const Input = ({input_click}) => {
    
    const HandlerEnter = (e) => {
        if (e.key === "Enter") {
            input_click()
        }
    }

  return (
    <>
      <input type="search" className='input_text' onKeyDown={(e) => HandlerEnter(e)} />
    </>
  )
}

export default Input
