import React from 'react'
import HouseIcon from '@mui/icons-material/House';
import HouseOutlinedIcon from '@mui/icons-material/HouseOutlined';
import './header.css'
import PublicIcon from '@mui/icons-material/Public';
function Header() {
    return <>
        <div className='header fixed-top'>
            <HouseIcon className='house' />
            <div className='btn text-white'>
                <b>HTML</b>
            </div>
            <div className='btn text-white'>
                <b>CSS</b>
            </div>
            <div className='btn text-white'>
                <b>JAVASCRIPT</b>
            </div>
            <div className='btn text-white'>
                <b>SQL</b>
            </div>
            <div className='btn text-white'>
                <b>PYTHON   </b>
            </div>
            <div className='btn text-white'>
                <b>PHP</b>
            </div>
            <div className='btn text-white'>
                <b>BOOTSTRAP</b>
            </div>
            <div className='btn text-white'>
                <b>HOWTO</b>
            </div>



        </div>

        <PublicIcon className='house' />












    </>
}

export default Header