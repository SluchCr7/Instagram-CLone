import React from 'react'
import Link from 'next/link'
import { Url } from 'url'
type HeaderBarams = {
    icon?: React.ReactNode
    txt: string
    id?: string
    func?: () => void
    href?: Url
}
const CardCustome = (props : HeaderBarams) => {
  return (
    <Link className='Card' onClick={props.func} href={props.href}>
        <span className='spanCard_icon'>{props.icon}</span>
        <span className='spanCard_txt' id={props.id}>{props.txt}</span>
    </Link>
  )
}

export default CardCustome