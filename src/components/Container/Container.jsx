import React from 'react'
import './style.css'
const Container = ({children}) => {
  return (
    <div className='wrapper'>
        {children}
    </div>
  )
}

export default Container