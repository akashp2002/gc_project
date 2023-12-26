import React from 'react'

function CustomButton({btn_text,bgColor}) {
  return (
    <div>
        <button className={`${bgColor}  text-white text-sm py-2 px-4 rounded w-28 h-10 hover:opacity-8`}>{btn_text}</button>
    </div>
  )
}

export default CustomButton