import React from 'react';
import './Content.css';
import ContentItem from './ContentItem.jsx'

const Content = (props) => {   
  
    return(

     
        <div className="nat-content"> 
            <ContentItem visible={props.visible} />
            <ContentItem visible={props.visible +'2'} />
        </div>
    );

}

export default Content