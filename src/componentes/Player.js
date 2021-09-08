import React from 'react'       //Snippets: rfce
import Body from '../componentes/Body';
import Sidebar from '../componentes/Sidebar';
import Footer from '../componentes/Footer'
function player() {
    return (
        <div className="fuzzyBody">
            <Sidebar />
            <Body />
            <Footer />
        </div>
        
    )
}

export default player
