import React from 'react'
import loadingGIF from '../loading3.gif'

export const Loader = () => {
  return (
    <div className="loader">
      <img src={loadingGIF} alt=""/>
    </div>
  )
}
