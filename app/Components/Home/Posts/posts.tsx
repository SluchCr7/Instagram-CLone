import React from 'react'
import Post from './Post'
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import SendIcon from '@mui/icons-material/Send';
import TurnedInNotIcon from '@mui/icons-material/TurnedInNot';
import TagFacesIcon from '@mui/icons-material/TagFaces';
import Image from "next/image"

const Posts = () => {
  return (
    <div className='posts'>
        <Post poersonImg={'/zscofficial.jpg'} poersontxt={'zscofficial'} Img={'/zamalek.jpg'}  Views={'10,222 likes'} paragraph={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'} comments={'View all 1500 comments'}/>
        <Post poersonImg={'/Ramez.jpg'} poersontxt={'ramezgalalac'} Img={'/Ramez_eposide.png'}  Views={'10,222 likes'} paragraph={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'} comments={'View all 1500 comments'}/>
    </div>
  )
}

export default Posts