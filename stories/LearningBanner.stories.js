import {html} from 'lit-html';
import '../src/LearningBanner.js';
import '../src/LearningIcon.js';

export default {
    //how to refer to the component in the sidebar
    title: 'Learning Banner',
    //component itself
    component: 'learning-banner',
    argTypes:{
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

function LearningBannerTemplate({type, topText, bottomText}) {
    return html`
      <learning-banner type="${type}" topText="${topText}" bottomText="${bottomText}">
      </learning-banner>
    `;
  }

  export const ScienceBanner = LearningBannerTemplate.bind({});
  ScienceBanner.args ={
      type:'science',
      heading: 'Chemistry 110',
      topText:'',
      bottomText:'',
  };
  
  export const QuestionBanner = LearningBannerTemplate.bind({});
  QuestionBanner.args ={
      type:'question',
      heading: 'Question 1',
      topText:'',
      bottomText:'',
  };

  export const IdeaBanner = LearningBannerTemplate.bind({});
  IdeaBanner.args ={
      type:'idea',
      heading: 'Idea 1',
      topText:'',
      bottomText:'',
  };
