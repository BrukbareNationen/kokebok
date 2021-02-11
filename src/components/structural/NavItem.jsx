import React, {useState} from 'react';
import './NavItem.css'

function NavItem(props) {

    const [open, setOpen] = useState(false);

    return (
        <li className="nav-item">
            <button className="icon-button" onClick={() => setOpen(!open)}>
                <p>{props.title}</p>
            </button>
            {open && props.children}
        </li>

        );
    }
    
export default NavItem