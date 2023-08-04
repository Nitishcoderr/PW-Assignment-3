import React from 'react'
import loading from './circle-3.gif'
const Spinner = () => {
  return (
    <div className='spinner'>
      <img src={loading} alt="" />
    </div>
  )
}

export default Spinner
