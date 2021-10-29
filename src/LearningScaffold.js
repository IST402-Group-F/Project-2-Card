import {html, css} from 'lit';
import { SimpleColors } from '@lrnwebcomponents/simple-colors';

export class LearningScaffold extends SimpleColors {

    constructor() {
        super();
    }

    static get tag() {
        return 'learning-scaffold';
    }

    static get properties() {
        return {
            ...super.properties,
        }
    }

    render() {
        return html`
            <div id="header">
                <slot name="header></slot>
            </div>
            <div id="body">
                <slot name="body"></slot>
            </div>
        `;
    }
}

customElements.define(LearningScaffold.tag, LearningScaffold);