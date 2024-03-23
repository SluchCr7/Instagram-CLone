import React from 'react'
import Card from './card'
import Link from 'next/link'

const RightSide = () => {
    return (
    <div className='RightSide_cards'>
        <Card image={'/Home.jpg'} name={'Ahmed Abobakr'} suggest={'Ahmed Abobakr'} />
        <div className='Card_deta'>
            <h3>Suggestions for you</h3>
            <span>See all</span>
        </div>
        <Card image={'/Hoda.jpg'} name={'hodaeletreby'} suggest={'Suggest for you'} />
        <Card image={'/mohamedemam.jpg'} name={'mohamedemam'} suggest={'Suggest for you'} />
        <Card image={'/mekkystyle.jpg'} name={'mekkystyle'} suggest={'Suggest for you'} />
        <div className='Links_Cont'>            
            <div className='Card_deta_txt'>
                <Link className='Card_deta_txt_Link' href={'/'}>About</Link>
                <Link className='Card_deta_txt_Link' href={'/'}>Help</Link>
                <Link className='Card_deta_txt_Link' href={'/'}>Press</Link>
                <Link className='Card_deta_txt_Link' href={'/'}>Api</Link>
                <Link className='Card_deta_txt_Link' href={'/'}>Jobs</Link>
                <Link className='Card_deta_txt_Link' href={'/'}>Privacy</Link>
                <Link className='Card_deta_txt_Link' href={'/'}>Terms</Link>
            </div>
            <div className='Card_deta_txt'> 
                <Link className='Card_deta_txt_Link' href={'/'}>Locations</Link>
                <Link className='Card_deta_txt_Link' href={'/'}>Language</Link>
                <Link className='Card_deta_txt_Link' href={'/'}>Meta Verfication</Link>
            </div>
            <span className='Card_deta_txt_Rights'>© 2024 INSTAGRAM FROM META</span>
        </div>
    </div>
)
}

export default RightSide