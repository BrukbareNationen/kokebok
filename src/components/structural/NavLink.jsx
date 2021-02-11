import React from 'react';
import './NavLink.css';
import './DropdownMenu.css';


const NavLink = (props) => {

    const changeContent = () => {
        props.setVisible(props.title)
    }

    return(
       
        <div>
       
            <button className="menu-item" onClick={changeContent}>
            <span className="icon-button">{props.leftIcon}</span>
            {props.title}
            </button>
        </div>

        
    );
}

export default NavLink