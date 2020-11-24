import React from 'react'
import './css/Sidebar.css'

export default function Sidebar(){
 
    return(
        <div className="Container-Sidebar">
            <div className="Home">
                <i className="ri-home-4-fill" id="Home-icon"></i>
                <p id="Home-text">Home</p>
            </div>
            <div className="Trending">
                <i className="ri-fire-fill" ></i>
                <p>Trending</p>
            </div>
            <div className="Subscriptions">
                <div className="Sub-img-lines">
                    <div></div>
                    <div></div>
                </div>
                <i className="ri-movie-fill"></i>
                <p>Subscriptions</p>
            </div>
            <div className="Library">
                <i className="ri-video-fill"></i>
                <i className="ri-video-fill"></i>
                <p>Library</p>
            </div>
        </div>
    )
}