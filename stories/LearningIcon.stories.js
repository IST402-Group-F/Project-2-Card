import {html} from 'lit-html';

import '../src/LearningIcon.js';

export default {
    title: 'Learning Icon',
    component: 'learning-icon',
    argTypes: {
        type:{
            control: 'select',
            options: {
                science: 'science',
                question: 'question',
                idea: 'idea',
            },
        },
    },
};

function LearningIconTemplate({type}) {
    //added background-color: grey because icon is white
    return html `
    <div style="background-color: grey;">
    <learning-icon type="${type}"></learning-icon>
    </div>`
}

export const ScienceIcon = LearningIconTemplate.bind({});
ScienceIcon.args={
    type: 'science',
};

export const QuestionIcon = LearningIconTemplate.bind({});
QuestionIcon.args={
    type: 'question',
};

export const IdeaIcon = LearningIconTemplate.bind({});
IdeaIcon.args={
    type: 'idea',
};