import React from 'react'
import {FaPlay} from 'react-icons/fa';
import {BsFillSkipEndFill} from 'react-icons/bs';
import {BsFillSkipStartFill} from 'react-icons/bs';
import {RiPlayListFill} from 'react-icons/ri';


const Footer = () => {
    return (
        <div classname="footerContainer">
            <div className="footerLeft">
                <div>
                    <p>Se está reproduciendo...</p>
                    <h4>Canción</h4>
                    <p>Artista</p>
                </div>
            </div>
            <div className="footerRight">
                <RiPlayListFill />
            </div>
            <div className="footerCenter">
            <BsFillSkipStartFill />
            <FaPlay />
            <BsFillSkipEndFill />
            </div>
        </div>
    )
}

export default Footer
