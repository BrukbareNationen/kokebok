import React from 'react';
import './NavLink.css';
import './DropdownMenu.css';


const NavLink = (props) => {

    const changeContent = () => {
        props.setVisible(props.title)
    }

    return(
       
        <li>
       
            <button className="menu-item" onClick={changeContent}>
            <span className="icon-button">{props.leftIcon}</span>
            {props.title}
            </button>
        </li>

        
    );
}

export default NavLink