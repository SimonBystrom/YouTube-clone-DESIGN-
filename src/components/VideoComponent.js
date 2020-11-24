import React from 'react'

import "./css/VideoComponent.css"

export default function VideoComponent(props){
 
    return (
        <div className="VideoComp">
            <div className="img">
                <img alt="" src={props.thumbnail}></img>
            </div>
            <div className="profile">
                <img alt="" src={props.profile_icon}></img>
            </div>
            <div className="info">
                <h5>{props.title}</h5>
                <p>{props.creator}</p>
                <div className="Views-container">
                    <p>{props.views}</p>
                    <div></div>
                    <p>{props.upload_date}</p>
                </div>
            </div>
        </div>
    )
}