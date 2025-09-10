import React from 'react'

function Button({
    children,
    type='button',
    bgColor='bg-blue-600',   //attributes used in the button or variables!!
    textColor='text-white',
    className='',
    ...props
}) {
  return (
    <div>
      <button className={`px-4 py-2 rounded-lg ${bgColor} ${textColor} ${className}`}{...props}>{children}</button>
    </div>
  )
}

export default Button
