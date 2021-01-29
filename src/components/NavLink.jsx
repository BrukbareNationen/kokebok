import React from 'react';
import './NavLink.css';

const NavLink = (props) => {

    const changeContent = () => {
        props.setVisible(props.title)
    }

    return(
       
        <li>
       
            <button onClick={changeContent}>
            {props.title}
            </button>
        </li>

        
    );
}

export default NavLink