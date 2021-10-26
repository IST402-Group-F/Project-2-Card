import { html, css } from 'lit';
import { SimpleColors } from '@lrnwebcomponents/simple-colors';

const beaker = new URL('../assets/beaker.svg', import.meta.url).href;
const lightbulb = new URL('../assets/lightbulb.svg', import.meta.url).href;
const question = new URL('../assets/question.svg', import.meta.url).href;

export class LearningIcon extends SimpleColors {

    constructor() {
        super();
        this.img = lightbulb;
    }

    static get tag() {
        return 'learning-icon';
    }

    static get properties() {
        return {
            ...super.properties,
            icon: {type: String },
        };
    }


    render() {
        return html`

            <div id="banner">
                <img src="${this.icon}" alt="">
            </div>
        `;
    }

}
customElements.define(LearningIcon.tag, LearningIcon);