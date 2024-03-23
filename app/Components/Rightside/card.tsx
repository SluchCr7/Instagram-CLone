import React from 'react'
import Image from "next/image"
import Link from "next/link"

type headerBarams = {
  image : string
  name : string
  suggest : string
}
const Card = (prop : headerBarams) => {
  return (
    <Link className='CardName_right' href={'/'}>
        <div className='CardName_left'>
            <Image
                src={prop.image}
                alt="Vercel Logo"
                className="img_Name_left_side"
                width={100}
                height={100}
            />
            <div className='NameTag_details'>
                <span className="name">{prop.name}</span>
                <span className="Suggest">{prop.suggest}</span>
            </div>
        </div>
        <span className='followAcc'>Follow</span>
    </Link>
  )
}

export default Card