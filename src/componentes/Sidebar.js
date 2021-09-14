import { FaHome } from 'react-icons/fa'; //Paquete: "React icons"ice';
import { FaSearch } from 'react-icons/fa';
import { IoMusicalNotesSharp } from 'react-icons/io';
import React from 'react'

const Sidebar = () => {
    return (
        <div className="sidebarContainer">
           <h1>sidebar</h1> 
        <div className="sidebarChoice" title="Inicio"><FaHome /></div>
        <div className="sidebarChoice" title="Buscar"><FaSearch /></div>
        <div className="sidebarChoice" title="Tu música"><IoMusicalNotesSharp /></div>
        <div className="Playlist"></div>
        <hr/>
        </div>
    )
}

export default Sidebar
