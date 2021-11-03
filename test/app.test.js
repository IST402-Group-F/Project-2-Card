import { html } from 'lit';
import { fixture, expect } from '@open-wc/testing';

import '../src/app.js';

describe('LearningCard', () => {
  let element;
  beforeEach(async () => {
    element = await fixture(html`<learning-card type="science">
      <p>This is test body content</p>
    </learning-card>`);
  });

  it('renders a h1', () => {
    const h1 = element.shadowRoot
      .querySelector('learning-banner')
      .shadowRoot.querySelector('h1');
    expect(h1).to.exist;
    expect(h1.textContent).to.equal('Unit 1');
  });

  it('renders correct icon', () => {
    const icon = element.shadowRoot
      .querySelector('learning-banner')
      .shadowRoot.querySelector('learning-icon')
      .shadowRoot.querySelector('img');
    expect(icon).to.exist;
    expect(icon.getAttribute('src')).to.contain('beaker.svg');
  });

  it('renders the content body', () => {
    const body = element.querySelector('p');
    expect(body).to.exist;
    expect(body.textContent).to.equal('This is test body content');
  });

  it('check if Scaffold Slots used correctly', () => {
    const slot = element.shadowRoot
      .querySelector('learning-scaffold')
      .shadowRoot.querySelector('slot[name=header]');
    console.log(
      `##################${
        slot.assignedNodes({ flatten: true })[0].textContent
      }`
    );
    expect(slot.assignedNodes({ flatten: true })[0].textContent).to.equal(
      '\n          \n        '
    );
  });

  it('passes the a11y audit', async () => {
    await expect(element).shadowDom.to.be.accessible();
  });
});
