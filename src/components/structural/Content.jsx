import React from 'react';
import './Content.css';
import ContentItem from './ContentItem.jsx'

const Content = (props) => {   
  
    return(

     
        <div className="nat-content">
            { console.log(props.tag + ' wooooooop') }
            
            <ContentItem tag={props.tag} />
            <ContentItem tag={props.tag +'2'} />
        </div>
    );

}

export default Content