import React, { useEffect, useState } from 'react'
import getData from '../componentes/getData'
const url='https://e23279ec-dbf2-46ea-9b5b-375037e64a96-00-lu8wikwdtwis.kirk.replit.dev/user/'

function Get() {
  
  const [length,setLength]=useState(1)
  let list=[]
 getData()




 

  

  

  return (
    <div>{list}</div>
  )
}

export default Get 