import React from 'react'

export default function About() {
    return (
        <div style ={aboutStyle}>
            <h1>About</h1>
            <p>This is the TodoList app to learn the basics of react</p>
        </div>
    )
}
const aboutStyle = {
    margin: 'auto',
    width: '50%',
    border: '3px solid green',
    padding: '10px',
    textAlign: 'center'
  }
