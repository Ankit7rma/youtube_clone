import React from 'react'
import Button from "./Button";
const list = ["Music","Live","Stocks","Motivation","Shark Tank","News","Body building","Recent Uploads"]
const ButtonList = () => {
  return (
    <div className='flex '>
    <Button name ="All"/>
    {list.map((item, index) => (
  
    <Button name={item} id={index} />
  
))}
    </div>
  )
}

export default ButtonList




