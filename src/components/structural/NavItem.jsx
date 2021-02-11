import React, {useState} from 'react';
import './NavItem.css'

function NavItem(props) {

    // const [open, setOpen] = useState(false);

    return (
        <li className="nav-item">
            <button className="icon-button" onClick={() => props.setOpen(!props.open)}>
                <p>{props.title}</p>
            </button>
            {props.open && props.children}
        </li>

        );
    }
    
export default NavItem