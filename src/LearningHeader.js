import { html, css } from 'lit';
import {SimpleColors} from "@lrnwebcomponents/simple-colors/simple-colors.js"

export class LearningHeader extends SimpleColors{

    constructor(){
        super();
        this.dark = false;
        this.topText = "Top Text";
        this.bottomText = "Bottom Text";
        this.accentColor = "purple";
        this.fontSize = 20;
    }

    static get tag(){
        return 'learning-header';
    }

    static get properties() {
        return{
            ...super.properties,
            topText: {type: String},
            bottomText: {type: String},
            fontSize: {type: BigInt},
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
                <p style="font-size: ${this.fontSize}px" id="top-header">${this.topText}</p>
                <b><p style="font-size: ${this.fontSize}px" id="sub-header">${this.bottomText}</p></b>
            </div>
        `
    }
}

customElements.define(LearningHeader.tag, LearningHeader);