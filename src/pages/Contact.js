import React from 'react'
import { useLocation } from 'react-router-dom'


const Contact = () => {
  const querySearch = useLocation().search;
  console.log(querySearch);//?name=Mario

  const queryParams = new URLSearchParams(querySearch)
  const name = queryParams.get('name')
  console.log(name);
  return (
    <div style={{textAlign:"center"}}>
      <h1>Contact</h1>
      <h2>Hey {name}, let's connect</h2>
    </div>
  )
}

export default Contact