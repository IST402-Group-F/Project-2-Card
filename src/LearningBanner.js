import {html, css} from 'lit';
import {SimpleColors} from '@lrnwebcomponents/simple-colors/simple-colors.js';

export class LearningBanner extends SimpleColors {
    
    static get tag() {
        return 'pjc-banner';
    }

//html for banner
render (){
    return html`
    <div id = "learningBanner">
        <div id = "header">
            <div slot="main header" id="main-header">Main Header Slot</div>
            <div slot="sub header"id="sub-header"> Sub Header Slot </div> 
        </div>
    </div>
 `};
}

