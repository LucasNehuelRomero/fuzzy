import { AiFillHome } from 'react-icons/fa'; //Paquete: "React icons"ice';
import { AiOutlineSearch } from 'react-icons/fa';
import { IoMusicalNotesSharp } from 'react-icons/fa';
import React from 'react'

const Sidebar = () => {
    return (
        <div className="sidebarContainer">
           <h1>sidebar</h1> 
        <div className="sidebarChoice" title="Inicio" icon={AiFillHome}></div>
        <div className="sidebarChoice" title="Buscar" icon={AiOutlineSearch}></div>
        <div className="sidebarChoice" title="Tu música" icon={IoMusicalNotesSharp}></div>
        <div className="Playlist"></div>
        <hr/>
        </div>
    )
}

export default Sidebar
