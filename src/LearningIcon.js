import { html, css } from 'lit';
import { SimpleColors } from '@lrnwebcomponents/simple-colors';

const beaker = new URL('../assets/beaker.svg', import.meta.url).href;
const lightbulb = new URL('../assets/lightbulb.svg', import.meta.url).href;
const question = new URL('../assets/question.svg', import.meta.url).href;

export class LearningIcon extends SimpleColors {

    constructor() {
        super();
        this.img = lightbulb;
        this.type = "science";
    }

    static get tag() {
        return 'learning-icon';
    }

    static get properties() {
        return {
            ...super.properties,
            img: {type: String },
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
            this.img = beaker;
          }else if (propName == "type" && this[propName] === "question"){
            this.img = question;
          }else if (propName == "type" && this[propName] === "idea"){
            this.img = lightbulb;
          }
        });
      }

      firstUpdated(changedProperties) {
        if (super.firstUpdated) {
          super.firstUpdated(changedProperties);
        }
      }

    render() {
        return html`
            <div>
                <img src=${this.img} part="icon" alt="">
            </div>
        `;
    }

}
customElements.define(LearningIcon.tag, LearningIcon);