import React, { useEffect, useState } from 'react'

const Time = () => {
    const [time, setTime] = useState('')
    const [price, setPrice] = useState('')
    const gettime = () => {
        const date = new Date();
        let hours = date.getHours();
        let minutes = date.getMinutes();
        let seconds = date.getSeconds();
        return `${hours} : ${minutes} : ${seconds}`
    }
    useEffect(() => {
        let timer1 = setInterval(() => {
                setTime(gettime)
            }, 1000);

            return () => clearInterval(timer1)
    }, []);
    useEffect(() => {
        let timer2 = setInterval(() => {
                setPrice((Math.random()).toFixed(2))
                console.log('ok')
            }, 1000);

            return () => clearInterval(timer2)
    }, []);
    return (
        <div className='buy'>
            <div className='time'>
                <div>
                    <p>Current Time</p>
                    <span>{time}</span>
                </div>
                <div>
                    <p>Current Bid</p>
                    <span>{price} ETH</span>
                </div>
            </div>
            <div>
                <button>Buy Now</button>
            </div>
        </div>
    )
}

export default Time