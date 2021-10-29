import { html, css } from 'lit';
import { SimpleColors } from '@lrnwebcomponents/simple-colors/simple-colors.js';
import "./LearningIcon.js";

export class LearningBanner extends SimpleColors {

    constructor() {
        super();
        this.dark = false;
        this.type = 'idea';
        this.topText = "Top Text";
        this.bottomText = "Bottom Text";
        this.myIcon = null;
        this.accentColor = "deep-purple";
    }

    static get tag() {
        return 'learning-banner';
    }

    static get properties() {
        return {
            ...super.properties,
            type: { type: String, reflect: true },
            topText: {type: String},
            bottomText: {type: String},
            icon: {type: String}
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
                .grid-container {
                    display: grid;
                    grid-template-columns: 170px auto;
                    grid-column-gap: 1px;
                    background-color: var(--simple-colors-default-theme-accent-7);
                }
            `,
        ];
    }   

    updated(changedProperties) {
        changedProperties.forEach((oldValue, propName) => {
          if (propName === "type" && this[propName] === "science") {
            this.accentColor = "green";
            this.topText = "Unit 1";
            this.bottomText = "Chem Conventions";
          }else if (propName == "type" && this[propName] === "question"){
            this.accentColor = "deep-purple";
            this.topText = "Unit Review";
            this.bottomText = "Practice Problems";
          }else if (propName == "type" && this[propName] === "idea"){
            this.accentColor = "orange";
            this.topText = "Unit Summary";
            this.bottomText = "Things to"
          }
        });
      }
    
      firstUpdated(changedProperties) {
        if (super.firstUpdated) {
          super.firstUpdated(changedProperties);
        }
      }

    //html for banner
    render() {
        return html`
    <div id = "learningBanner" class="grid-container">
        <div id = "icon">
            <learning-icon type="${this.type}"></learning-icon>
        </div>
        <div id = "header">
            <h1 slot="top-header">${this.topText}</h1>
            <h3 slot="bottom-header"> ${this.bottomText}</h3>
        </div>
    </div>
 `}
}
/**
 * 
        <div slot="main-header" id="main-header">Main Header Slot</div>
        <div slot="sub-header"id="sub-header"> Sub Header Slot </div>
 */

customElements.define(LearningBanner.tag, LearningBanner);
