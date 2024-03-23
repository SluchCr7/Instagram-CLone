import React from 'react'
import Link from 'next/link'
function not_found() {
  return (
    <div className='page_notfound'>
        <div className='TopPage_notfound'>
            <span className='TopPage_span'>Sorry, this page is not available.</span>
            <p className='TopPage_paragraph'>The link you followed may be broken, or the page may have been removed. Go back to Instagram.</p>
        </div>
        <div className='BottomLinks_notfound'>
            <div className='BottomLinks'> 
                <Link className='Link_notfound' href={'/'}>Meta</Link>
                <Link className='Link_notfound' href={'/'}>About</Link>
                <Link className='Link_notfound' href={'/'}>Blog</Link>
                <Link className='Link_notfound' href={'/'}>Jops</Link>
                <Link className='Link_notfound' href={'/'}>Help</Link>
                <Link className='Link_notfound' href={'/'}>Api</Link>
                <Link className='Link_notfound' href={'/'}>Privacy</Link>
                <Link className='Link_notfound' href={'/'}>Terms</Link>
                <Link className='Link_notfound' href={'/'}>Locations</Link>
                <Link className='Link_notfound' href={'/'}>Instagram Lite</Link>
                <Link className='Link_notfound' href={'/'}>Threads</Link>
                <Link className='Link_notfound' href={'/'}>Contact Uploading & Non-Users</Link>
                <Link className='Link_notfound' href={'/'}>Meta Verified</Link>
            </div>
            <div className='Bottom_Lang_Links'>
                <select name="" id="" className='Link_notfound_select'>
                    <option value="" className='Link_notfound_select_option'>English</option>
                    <option value="" className='Link_notfound_select_option'>العربية</option>
                    <option value="" className='Link_notfound_select_option'>Hindi</option>
                    <option value="" className='Link_notfound_select_option'>Spanish</option>
                    <option value="" className='Link_notfound_select_option'>French</option>
                    <option value="" className='Link_notfound_select_option'>Portuguese</option>
                    <option value="" className='Link_notfound_select_option'>Chinese</option>
                    <option value="" className='Link_notfound_select_option'>Rusian</option>
                    <option value="" className='Link_notfound_select_option'>Vietnamese</option>
                    <option value="" className='Link_notfound_select_option'>Italian</option>
                    <option value="" className='Link_notfound_select_option'>Bengali</option>
                    <option value="" className='Link_notfound_select_option'>Russian</option>
                    <option value="" className='Link_notfound_select_option'>Japanese</option>
                    <option value="" className='Link_notfound_select_option'>Korean</option>
                    <option value="" className='Link_notfound_select_option'>Hindi</option>
                    <option value="" className='Link_notfound_select_option'>العبرية</option>
                </select>
                <span>© 2024 INSTAGRAM FROM META</span>
            </div>
            
        </div>
    </div>
  )
}

export default not_found