import React, { useEffect, useState } from 'react'
import CardPreview from './CardPreview'
const url=`https://e23279ec-dbf2-46ea-9b5b-375037e64a96-00-lu8wikwdtwis.kirk.replit.dev/user/`
function getData() {
  let list=[]
    const [data,setData]=useState([])
    useEffect(()=>{
   
        fetch(url).then(resolve=>resolve.json()).then(resolve=>{
          
          setData(resolve)})

          
        },[])
        
        
        useEffect(()=>{  
          
        for(let i=0;i<data.length;i++){
          let valor=(data[i])
        
         list[i]=(
         <div><CardPreview
         autor={data[i].autor} 
          password={data[i].password}
          title={data[i].title}
          img={data[i].img}
          text={data[i].text} 
       /></div>)
       setOutput(list)
        }
        
        
        
        },[data.length]
     
        
        )
      
  /* return (<div><CardPreview
    autor={data.autor} 
     password={data.password}
     title={data.title}
     img={data.img}
     text={data.text}
  /></div>
   
  ) */

const [output,setOutput]=useState([])

 return output
}

export default getData


