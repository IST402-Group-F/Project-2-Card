import { html } from 'lit-html';

import '../src/LearningScaffold.js';

export default {
    title: 'Learning Scaffold',
    component: 'learning-scaffold',
};

function LearningScaffoldTemplate({header, body}){
    return html`
    <learning-scaffold>
    <div slot="header">${header}</div>
    <div slot="body">${body}</div>
    </learning-scaffold>
    `
};

export const StandardScaffold = LearningScaffoldTemplate.bind({});
StandardScaffold.args={
    header: '',
    body: '',
};