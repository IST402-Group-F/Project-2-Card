import { html, css } from 'lit';
import {SimpleColors} from "@lrnwebcomponents/simple-colors/simple-colors.js"

export class LearningHeader extends SimpleColors{

    constructor(){
        super();
        this.dark = false;
        this.topText = "Top Text";
        this.bottomText = "Bottom Text";
        this.accentColor = "purple";
    }

    static get tag(){
        return 'learning-header';
    }

    static get properties() {
        return{
            ...super.properties,
            topText: {type: String},
            bottomText: {type: String}
        };
    }

    static get styles(){
        return[
            ...super.styles,
            css`
                :host {
                    display: block;
                    background-color: var (--simple-colors-default-theme-accent-4);
                }
            `,
        ];
    }

    render() {
        return html`
            <div>
                <h1 id="top-header">${this.topText}</h1>
                <h3 id="sub-header">${this.bottomText}</h3>
            </div>
        `
    }
}

customElements.define(LearningHeader.tag, LearningHeader);