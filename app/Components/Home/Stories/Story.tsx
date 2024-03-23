import React from 'react'
import Image from "next/image"
type storyProps = {
    img : string
    name : string
}

const Story = (prop : storyProps) => {
  return (
    <div className='story'>
        <Image
            src={prop.img}
            alt="Vercel Logo"
            className="img_Name"
            width={100}
            height={100}
        />
        <span className='NameTag'>{prop.name}</span>
    </div>
  )
}

export default Story