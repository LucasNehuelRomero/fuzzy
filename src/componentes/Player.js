import React from 'react'       //Snippets: rfce
import Body from '../componentes/Body';
import Sidebar from '../componentes/Sidebar';
import Footer from '../componentes/Footer'
function Player() {
    return (
        <div className="fuzzyBody">
            <Sidebar />
            <Body />
            <Footer />
        </div>
        
    )
}

export default Player
