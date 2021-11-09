import { html, css, LitElement } from 'lit';

const beaker = new URL('../assets/beaker.svg', import.meta.url).href;
const lightbulb = new URL('../assets/lightbulb.svg', import.meta.url).href;
const question = new URL('../assets/question.svg', import.meta.url).href;

export class LearningIcon extends LitElement {

    constructor() {
        super();
        this.icon = lightbulb;
        this.type = "idea";
    }

    static get tag() {
        return 'learning-icon';
    }

    static get properties() {
        return {
            icon: {type: String },
            type: {type: String },
        };
    }

    static get styles() {
        return css`
            :host {
                display: block;
                width: 125px;
                height: 125px;
            }
        `;
    }
    
    updated(changedProperties) {
        changedProperties.forEach((oldValue, propName) => {
          if (propName === "type" && this[propName] === "science") {
            this.icon = beaker;
          }else if (propName == "type" && this[propName] === "question"){
            this.icon = question;
          }else if (propName == "type" && this[propName] === "idea"){
            this.icon = lightbulb;
          }
        });
      }

    render() {
        return html`
            <div>
                <img src=${this.icon} part="icon" alt="">
            </div>
        `;
    }

}
customElements.define(LearningIcon.tag, LearningIcon);