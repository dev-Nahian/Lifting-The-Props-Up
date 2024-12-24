import React, { useState } from 'react'

export default function Panel({title, children, isActive, onActive }) {


    // const handleShow = () => {
    //     setIsActive(!isActive)
    // }

  return (
    <section className="panel">
        <h3>{title}</h3>
        {isActive ? <p>{children}</p> : <button onClick={onActive}>Show</button>}
    </section>
  )
}
