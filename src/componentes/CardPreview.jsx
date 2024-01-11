import React, { useEffect, useState } from 'react'

const CardPreview = (props) => {
 let img=props.img
 let title
 let nome
 let text

 if(props.text!=''){
  text=props.text
 }else text='"Descrição"'


 if(props.autor!=''){
  nome=props.autor
 }else nome='"Autor"'


 if(props.title!=''){
  title=props.title
 }else title='"Título"'
  return (
    <div
    class=" max-w-[320px] h-[455px] overflow-hidden  mt-[20px] w-[320px] my-auto ml-[30px] rounded-lg bg-[#f2f2f2] shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] ">
    <div class="preview-card ">
      
      <img
        class="rounded-t-lg object-cover h-[100%] min-w-[100%] "
        src={props.img} 
        alt="" 
       




        />
        
    </div>
    <div class="p-6">
        <h2 className="font-['Verdana'] text-[25px] font-semibold text-ellipsis overflow-hidden text-nowrap">{(title)}</h2>
        <p className="font-['Verdana'] text-[17px] text-gray-950 break-words  h-[110px] ">{(text)}</p>
      <h4 className="font-['Verdana'] font-semibold text-right text-[15px] text-corM3 ">Publicado por {nome}</h4>
    </div>
  </div>
  )
}

export default CardPreview