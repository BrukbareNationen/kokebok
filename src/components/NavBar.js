import React from 'react';
import './NavBar.css';
import NavLink from './NavLink.jsx';




const NavBar = (props) => {

    var menuItems = props.menuItems
    
    return(

        <div  className="nat-navbar">
            <ul>
                {menuItems.map(menuItem =>(
                    <NavLink setVisible= {props.setVisible} visible={props.visible} title={menuItem}/>
                ))
                    
                }
            </ul>
        </div>

    );
}

export default NavBar