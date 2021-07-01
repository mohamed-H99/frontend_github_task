import React from 'react'
import './styles.css'

export default function TheLoader() {
  return (
    <div className="flex justify-center my-3">
      <div className="lds-ellipsis">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  )
}
