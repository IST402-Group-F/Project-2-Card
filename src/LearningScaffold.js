import {html, css, LitElement} from 'lit';

export class LearningScaffold extends LitElement {

    static get tag() {
        return 'learning-scaffold';
    }

    static get styles() {
        return [
            css`
                :host {
                    display: block;
                    color: black;
                    font-family: 'Open Sans', sans-serif;
                }

                #body, #header{
                    border: 1px solid black;
                    background-color: white;
                    padding: 0px;
                    margin: 0px;
                }
            `,
        ];
    }   

    render() {
        return html`
            <div id="header">
                <slot name="header"></slot>
            </div>
            <div id="body">
                <slot name="body"></slot>
            </div>
        `;
    }
}

customElements.define(LearningScaffold.tag, LearningScaffold);