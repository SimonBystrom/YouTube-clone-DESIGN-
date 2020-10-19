import React from 'react'

import './Content.css'
import VideoComponent from "./VideoComponent"
import {content} from "../Content-info"


export default function Content(){
 
    let VideoContentRender = content.map(item => 
    <VideoComponent thumbnail={item.thumbnail}
                    title={item.title}
                    creator={item.creator}
                    views={item.views}
                    upload_date={item.upload_date}
                    profile_icon={item.profile_icon}
     ></VideoComponent>
    )

    return(
        <div className="Container-Content">
           {VideoContentRender}
        </div>
    )
}