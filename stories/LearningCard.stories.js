import {html} from 'lit-html';

import '../src/LearningCard.js';

export default {
    title: 'Learning Card',
    component: 'learning-card',
    argTypes: {
        slot: {control: 'text'},
        type: {
            control: 'select',
            options: {
                science: 'science',
                question: 'question',
                idea: 'idea',
            },
        },
    },
};

function LearningCardTemplate({slot, topText, bottomText, type}){
    return html`
    <learning-card type="${type}" topText="${topText}" bottomText="${bottomText}">
    ${slot}
    </learning-card>
    `
}

export const ScienceCard = LearningCardTemplate.bind({});
    ScienceCard.args = {
        type: 'science',
        topText: '',
        bottomText: '',
        slot: html`<p>test text</p>`,
    };
export const QuestionCard = LearningCardTemplate.bind({});
    QuestionCard.args = {
        type: 'question',
        topText: '',
        bottomText: '',
        slot: html`<p>test text</p>`,
    };
export const IdeaCard = LearningCardTemplate.bind({});
    IdeaCard.args = {
        type: 'idea',
        topText: '',
        bottomText: '',
        slot: html`<p>test text</p>`,
    };
