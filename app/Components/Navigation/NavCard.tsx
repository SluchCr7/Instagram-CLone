import Link from 'next/link'
import React from 'react'

type headerBarams = {
    icon: React.ReactNode
    txt: string
    id?: string
    func?: () => void
}
const NavCard = (prop: headerBarams) => {
  return (
    <div className="card" onClick={prop.func}>
          <span className='icon'>{prop.icon}</span>
          <span className='title' id={prop.id}>{prop.txt}</span>
    </div>
  )
}

export default NavCard