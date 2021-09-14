import React from 'react'

const SidebarChoice = ({title, icon}) => {
    return (
        <div className="Choices">{
           icon && <div className="Icon"> </div>
        }
        {
            icon ? <h4>{title}</h4> : <h5>{title}</h5>
        }
        </div>
    )
}

export default SidebarChoice
