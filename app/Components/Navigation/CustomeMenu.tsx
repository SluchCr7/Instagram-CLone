'use client'
import React from 'react'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import SettingsIcon from '@mui/icons-material/Settings';
import FavoriteIcon from '@mui/icons-material/Favorite';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder'; 
import Brightness3Icon from '@mui/icons-material/Brightness3';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import ReportGmailerrorredIcon from '@mui/icons-material/ReportGmailerrorred';
import CardCustome from './cardCustome';
const CustomeMenu = () => {
    // document.body.classList.add(localStorage.getItem('darkMode'))
    document.body.classList.add(localStorage.getItem('Dark-mode'))
    const isDarkMode = localStorage.getItem('darkMode') === "enabled";
    if (isDarkMode) {
        enableDarkMode()
    }
    function enableDarkMode() {
        document.body.classList.add("Dark-mode")
        localStorage.setItem("darkMode", "enabled")
    }
    function disableDarkMode() {
        document.body.classList.remove("Dark-mode")
        localStorage.setItem("darkMode", null)
    }
    function DarkLightMode () {
        if (document.body.classList.contains("Dark-mode")) { 
            disableDarkMode()
        }
        else {
            enableDarkMode()
        }
    }
    return (
    <div className='MenuCustome asidetext' id='MenuCustome'>
        <div className='CardsMenu'>
            <CardCustome icon={<SettingsIcon />} txt={'Settings'}/>
            <CardCustome icon={<FavoriteIcon />} txt={'Your activity'}/>
            <CardCustome icon={<BookmarkBorderIcon />} txt={'Saved'}/>
            <CardCustome icon={<Brightness3Icon />} txt={'Switch apperance'} func={DarkLightMode}/>
            <CardCustome icon={<ReportGmailerrorredIcon />} txt={'Report a problem'} />
        </div>
        <hr className='LineBreak' />
        <div className='CardsMenu'>
            <CardCustome txt={'Account'} />
        </div>
        <hr className='LineBreak' />
        <div className='CardsMenu'>
            <CardCustome txt={'Log Out'} href={'/Auth'}/>
        </div>
    </div>
  )
}

export default CustomeMenu