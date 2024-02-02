import React, { useEffect, useState } from 'react'

const ToTop = () => {
    let[Toggle,setToggle]=useState(false)
    useEffect(()=>{
          window.addEventListener("scroll",()=>{
               if(window.scrollY>600){
                setToggle(true)
               }else{
                setToggle(false)
               }
          })
    },[])

    const ToTop=(e)=>{
        e.preventDefault()
        window.scrollTo({
            top:0,
            behavior:'smooth'
        })
    }
  return (
    <div>
      {Toggle && <button className="toTop" onClick={ToTop}><i class="fa-solid fa-chevron-up"></i></button>}
    </div>
  )
}

export default ToTop
