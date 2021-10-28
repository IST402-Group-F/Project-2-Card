import { html, css } from 'lit';
import { SimpleColors } from '@lrnwebcomponents/simple-colors/simple-colors.js';
import "./LearningIcon.js";

export class LearningBanner extends SimpleColors {

    constructor() {
        super();
        this.dark = false;
        this.type = '';
        this.topText = "Top Text";
        this.bottomText = "Bottom Text";
        this.myIcon = null;
        this.accentColor = "purple";
    }

    static get tag() {
        return 'pjc-banner';
    }

    static get properties() {
        return {
            ...super.properties,
            type: { type: String },
            topText: {type: String},
            bottomText: {type: String}
        };
    }

    static get styles() {
        return [
            ...super.styles,
            css`
                :host {
                    display: block;
                    color: white;
                }
                .icon {
                    
                }
            `,
        ];
    }

    //html for banner
    render() {
        return html`
    <div id = "learningBanner">
        <div id = "icon">
            <learning-icon icon="beaker" class="icon"></learning-icon>
        </div>
        <div id = "header">
            <div slot="main-header" id="main-header"></div>
            <div slot="sub-header"id="sub-header"></div> 
            <h1 id="top-header">${this.topText}</h1>
            <h3 id="bottom-header"> ${this.bottomText}</h3>
        </div>
    </div>
 `}
}

customElements.define(LearningBanner.tag, LearningBanner);