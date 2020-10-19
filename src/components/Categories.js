import React from 'react'
import Slider from '../Slider'


import './Categories.css'
import {list} from '../Category-list'


/* Fix so all of the children fit inside container (of the carousel) */

export default function Categories(){

    let categories = list.map(item => <div className="List-Item">{item}</div>)
 
    return(
       <div className="Container-Categories">
        <Slider
        options={{
           groupCells: true,
            cellAlign: 'left',
            contain: true,
            pageDots: false,
            arrowShape: { 
                x0: 30,
                x1: 50, y1: 20,
                x2: 60, y2: 20,
                x3: 40
              },
          }}   
        >   
            {categories}
        </Slider>
        </div>
       
    )
}