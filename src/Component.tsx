import React from 'react'
import {useState} from 'react'

function Component() {
  const [buttonText, setButtonText] = useState<string>('click me')
  async function handleClick() {
    const response = await fetch(`/example`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
    
    const respData = await response.json()
    setButtonText(respData)
  }
  return (
    <>
      <button onClick={handleClick}>{buttonText}</button>
    </>
  )
}

export default Component