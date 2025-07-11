import { ArrowDropUp } from '@mui/icons-material'
import React from 'react'
import Icon from "react-crypto-icons";
import './topcard.scss'

const TopCard = () => {

    const crypData = [
        {
            id: 1,
            font: 'btc',
            text: 'Bitcoin',
            price: '2,247.30'
        },
        {
            id: 2,
            font: 'eth',
            text: 'Ethereum',
            price: '2,247.30'
        },
        {
            id: 3,
            font: 'dash',
            text: 'Dash',
            price: '2,247.30'
        },
        {
            id: 4,
            font: 'edo',
            text: 'Edo',
            price: '2,247.30'
        }
    ];




    return (
        <div className='topcard'>
            <div className='top'>
                <div className='left-top'>
                    <h4> Profit </h4>
                    <h1> $4,737.99 </h1>
                    <div className='green'>
                        <ArrowDropUp className='arrows'/>
                        <span> 12.3% </span>
                        <p> year over year </p>
                    </div>
                </div>
                <div className='right-top'>
                    <h4> Shares </h4>
                    <h3> $2,556.80 </h3>
                    <div className='green-sm'>
                        <ArrowDropUp className='arrows' />
                        <span> 8.5% </span>
                        <p> year over year </p>
                    </div>
                    <div className='charts-div'>
                        charts
                    </div>
                </div>
            </div>
            <div className='bottom'>
                {crypData.map( values => {
                    return(
                        <div key={values.id} className='crypto-div'>
                        
                            <Icon name={ values.font } className='crypto-icn' size={25} />
                            <h5> {values.text} </h5>
                            <span> {values.price} </span>
                        </div>
                    )

                }
                )}
               

            </div>
        </div>
    )
}

export default TopCard