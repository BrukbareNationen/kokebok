import React, { useState, useEffect, useRef } from 'react';
import './DropdownMenu.css';
import NavLink from './NavLink.jsx'

function DropdownMenu(props) {	

	

	

    return (
		<div className="dropdown">

			{props.items.map(item =>(
				<NavLink leftIcon="🐸" setVisible= {props.setVisible} visible={props.visible} title={item}>
				
				</NavLink>
			))
			}	
		</div>
	);
    
    
}


export default DropdownMenu