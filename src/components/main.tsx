import React from 'react';
import videoBg from '../assets/videoBg.mp4'

export const Main = () => {
    return (
        <div className='main'>
            <video src={videoBg} autoPlay loop muted/>
        </div>
    )
}