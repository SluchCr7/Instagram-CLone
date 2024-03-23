import React from 'react'
import Stories from './Stories/Stories'
import Posts from './Posts/posts'
import RightSide from '../Rightside/RightSide'

const HomeRoun = () => {
  return (
    <div className='HomeRoun'>
        <Stories />
        <Posts />
    </div>
  )
}

export default HomeRoun