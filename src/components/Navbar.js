import React from 'react'
import "../index.css"
import "./Navbar.css"

export default function Navbar(){
    return(
        <nav>
            <ul className="Nav">
                <li className="BurgerMenu">
                    <div></div>
                    <div></div>
                    <div></div>
                </li>
                <li>
                    <i className="ri-youtube-fill"></i>
                    <h3>YouTube</h3>
                </li>
                <li>
                    <form>
                        <input className="SearchBarInput" type="text" placeholder="Search" name="search"></input>
                        <button className="SearchBarButton"><i className="ri-search-line"></i></button>
                    </form>
                </li>
                <li>
                    <i className="ri-video-add-fill"></i>
                </li>
                <li>
                    <i className="ri-grid-fill"></i>
                </li>
                <li>
                    <i className="ri-notification-4-fill"></i>
                </li>
                <li>
                    <div className="Profile">S</div>
                </li>
            </ul>
        </nav>
    )
}