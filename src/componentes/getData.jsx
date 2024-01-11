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
          
          console.log(data.length)
        for(let i=0;i<=data.length;i++){
          let valor=(data[i])
         console.log(valor)
         list[i]=(
         <div><CardPreview
        /*  autor={data[i].autor} 
          password={data[i].password}
          title={data[i].title}
          img={data[i].img}
          text={data[i].text} */
       /></div>)
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

  let objeto=JSON.stringify({
    "img": "https://www.useupdate.com.br/media/magpleasure/mpblog/list_thumbnail_file/2/4/cache/1/119bdf99710d9a86013f24c82ab9b2da/24bfde45b5790f04b1d096565157f6a4.jpg",
    "title": "Cachorro",
    "postTime": "10/01/2024 19:28",
    "password": "1234",
    "autor": "Saulo Bacana",
    "text": "Testando",
    "id": 1
})
  objeto=objeto.split(',')
  objeto=JSON.parse(objeto)
  console.log(objeto.autor)
 
}

export default getData


