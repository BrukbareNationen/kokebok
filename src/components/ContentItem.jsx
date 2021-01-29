import React, {Component} from 'react';

import ReactComp from './ReactComp.js'
import Velkommen from './Velkommen.jsx'
import '../App.css'

class ContentItem extends Component {

    components = {
        ReactComp: ReactComp,
        Velkommen: Velkommen
    };

    render() {         
        if(this.components[(this.props.tag) ]) {
            const TagName = this.components[(this.props.tag) ];
            return <div className="content-container">
                    <TagName />
                    </div>
        } else {
            const TagName = this.components[('Velkommen') ];
            return <div className="content-container">
                    <TagName />
                    </div>
        }       
        
    }

}

export default ContentItem