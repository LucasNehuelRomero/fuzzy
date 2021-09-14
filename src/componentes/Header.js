import React from 'react'
import {FaSearch} from 'react-icons/fa';

const Header = () => {
    return (
        <div className="HeaderContainer">
            <div className="HeaderLeft">
                <div><FaSearch /></div>
                <input type="text" placeholder="Buscar artistas, canciones, u otros... "/>
            </div>
            <div className="HeaderRight">
                <div className="Avatar"></div>
                <h4>Lucaspepo</h4>
            </div>
        </div>
    )
}

export default Header
