import React from 'react'

const Search_button = ({click_fn}) => {
  return (
    <>
      <button className='search' onClick={click_fn}>🔍</button>
    </>
  )
}

export default Search_button
