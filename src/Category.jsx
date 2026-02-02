import React from 'react'

export default function Category({fCategory,setCl}) {
  
  return (
    <div>
        <h1 className='text-[4vh] pb-[3vh] font-[500] '>Product category</h1>
        <ul>
           {fCategory.map((v,i)=>(
            <li key={i} className='bg-[#ccc] cursor-pointer font-serif text-[3vh] mb-[2.5vh] pl-[2vw] rounded-[2vh]' onClick={()=>setCl(v.name.toLowerCase())}>{v.name}</li>
           ))}     
        </ul>
    </div>
  )
}
