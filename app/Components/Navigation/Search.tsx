import React from 'react'
import FavoriteIcon from '@mui/icons-material/Favorite';
import Image from 'next/image';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import CloseIcon from '@mui/icons-material/Close';
const Search = () => {
  return (
      <div className='search asidetext' id='search'>
        <span className='search_txt'>Search</span>
        <input type="search" placeholder='Search' />
        <hr />
        <div className='search_Cont'>
          <span className='search_txt_recent'>Recent</span>
          <span className='search_txt_recent'>Clear all</span>
        </div>
        <div className='search_acc'>
          <div className='search_acc_Cont'>
            <div className='search_acc_Left'>
              <Image
                src={'/Dina.jpg'}
                alt="Vercel Logo"
                className="img_acc_search"
                width={80}
                height={80}
              />
              <div className='search_acc_Details'>
                <span className='search_acc_name'>hodaeletreby</span>
                <span className='search_acc_tagName'>HodaEletreby . 1,3 M followers-هدي الاتربي</span>
              </div>
            </div>
            <div className='search_acc_Right'>
              <CloseIcon />
            </div>
          </div>
          <div className='search_acc_Cont'>
            <div className='search_acc_Left'>
              <Image
                src={'/Dina.jpg'}
                alt="Vercel Logo"
                className="img_acc_search"
                width={80}
                height={80}
              />
              <div className='search_acc_Details'>
                <span className='search_acc_name'>hodaeletreby</span>
                <span className='search_acc_tagName'>HodaEletreby . 1,3 M followers-هدي الاتربي</span>
              </div>
            </div>
            <div className='search_acc_Right'>
              <CloseIcon />
            </div>
          </div>
        </div>
      </div>
  )
}

export default Search