
import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Sidebar from '../../components/sidebar/Sidebar'
import { Box } from '@mui/material'
import './home.scss'
import Left from '../../components/left/Left'

function Home(){
    return(
        <div className='home'>
            <Navbar />
            <div className='home-cont'>
                <div className='home-wrapper'>
                    <Left />
                </div>
                <Box className='sidebar-box'>
                    <Sidebar  />
                </Box>
            </div>
            
        </div>
    )
}
export default Home