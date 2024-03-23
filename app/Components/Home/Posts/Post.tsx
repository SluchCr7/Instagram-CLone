import React from 'react'
import Image from "next/image"
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import SendIcon from '@mui/icons-material/Send';
import TurnedInNotIcon from '@mui/icons-material/TurnedInNot';
import TagFacesIcon from '@mui/icons-material/TagFaces';
type headerBarams = {
  poersonImg: string
  poersontxt: string
  Img: string
  Views: string
  paragraph: string
  comments: string
}

const Post = (prop : headerBarams) => {
  return (
    <div className='post'>
      <div className='top_post'>
          <div className='top_post_details'>
            <Image
                src={prop.poersonImg}
                alt="Vercel Logo"
                className="img_Name_post"
                width={80}
                height={80}
            />
            <span className='NameTag_post'>{prop.poersontxt} <h5><CheckCircleOutlineIcon/></h5></span>
          </div>
          <MoreHorizIcon />
      </div>
      <div className='Middle_post'>
        <Image
            src={prop.Img}
            alt="Vercel Logo"
          className="img_Name_post_Mid"
          width={600}
          height={600}
        />
      </div>
      <div className='bottom_post'>
        <div className='bottom_post_details_icons'>
          <div className='bottom_post_details_left'>
            <FavoriteBorderIcon />
            <ChatBubbleOutlineIcon />
            <SendIcon />
          </div>
          <div className='bottom_post_details_right'>
            <TurnedInNotIcon />
          </div>
        </div>
        <div className='bottom_post_details'>
          <span className='Views'>{prop.Views}</span>
        </div>
        <div className='bottom_post_details_text'>
          <span className='NameTag_post'>{prop.poersontxt}</span>
          <span className='text_post'>{prop.paragraph}</span>
        </div>
        <span className='translation'>See Translation</span>
        <div className='comments'>
          <span className='ViewComments'>{prop.comments}</span>
          <div className='comments_details'>
            <input type="text" placeholder='Add a comment...' />
            <span><TagFacesIcon /></span>
          </div>
        </div>
      </div>  
    </div>
  )
}

export default Post