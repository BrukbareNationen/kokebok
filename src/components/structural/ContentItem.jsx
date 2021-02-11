import React, {Component} from 'react';

import ReactComp from '../ReactComp.js';
import ReactComp2 from '../ReactComp2.jsx';
import Velkommen from '../Velkommen.jsx';
import Velkommen2 from '../Velkommen2.jsx';
import './../../App.css';

class ContentItem extends Component {

    components = {
        ReactComp: ReactComp,
        ReactComp2: ReactComp2,
        Velkommen: Velkommen,
        Velkommen2: Velkommen2
    };

    render() {         
        if(this.components[(this.props.visible) ]) {
            const TagName = this.components[(this.props.visible) ];
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