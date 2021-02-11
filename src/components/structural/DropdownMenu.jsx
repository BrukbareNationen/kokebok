import React, {useRef, useEffect} from 'react';
import './DropdownMenu.css';
import NavLink from './NavLink.jsx'



const  DropdownMenu = (props) => {	

	const node = useRef();

	
	
	useEffect(() => {
        document.addEventListener('mousedown', handleClick);
        return () => {
           document.removeEventListener('mousedown', handleClick);
        }
    }, [])

	const handleClick = e => {
		if (node.current.contains(e.target)) {
    	// inside click
		console.log("inside Click");
    return;
  		}
	console.log("outside Click");
	
		props.setOpen(false);
	}
	

	//props.setOpen(false)

    return (
		<div ref={node} className="dropdown">

			{props.items.map(item =>(
				<NavLink 
					leftIcon="🐸" 
					setVisible= {props.setVisible} 
					visible={props.visible} 
					title={item}>
				
				</NavLink>
			))
			}	
		</div>
	);
    
    
}


export default DropdownMenu