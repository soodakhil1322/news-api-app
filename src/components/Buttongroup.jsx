import React from 'react'


function Buttongroup({ buttons, Isselected, Setisselected }) {


  return (
    <div className='flex  py-5 items-center justify-center sm:flex-col' >
      <div className='space-x-10 '>
        {buttons.map((text, index) => { return <button className={Isselected === index ? "selected-button" : "button"} onClick={() => Setisselected(index)}> {text}</button> })}
      </div>

    </div>
  )
}


export default Buttongroup
