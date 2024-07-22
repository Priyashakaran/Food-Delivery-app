
import React from 'react'
import './AppDownload.css'
import { assets } from '../../assets/assets'


const AppDownload = () => {
  return (
    <div className="app-download" id='app-download'>
        <p>For quick and easy food delivery straight to your door download the <br/>
        <span style={{ color: 'orangered' }}>Tomato</span> app now!
        </p>
            <div className="app-download-platforms">
                <img src={assets.play_store} alt="" />
                <img src={assets.app_store} alt="" />
            </div>
    </div>
      
    
  )
}

export default AppDownload
