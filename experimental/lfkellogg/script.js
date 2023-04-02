const stickyElements = document.getElementsByClassName('sticky');

const TOP_OF_STUCK_IMAGE = 20; // Matches the 'top' CSS attribute on the 'sticky' class
const HEIGHT_OF_IMAGE = 40; // Matches the 'height' CSS attribute of the 'sticky'

window.onscroll = function () {
  for (var el of stickyElements) {
    console.log(`top: ${el.getBoundingClientRect().top}`);
    if (el.getBoundingClientRect().top < TOP_OF_STUCK_IMAGE + HEIGHT_OF_IMAGE) {
      el.style.visibility = 'visible';
    } else {
      el.style.visibility = 'hidden';
    }
  }
}

function createComponent(templateId, template) {
  const templateElement = document.createElement('template');
  templateElement.setAttribute('id', templateId);
  templateElement.innerHTML = template;
  document.body.appendChild(templateElement);

  customElements.define(templateId, class extends HTMLElement {
    constructor() {
      super();
      const template = document.getElementById(templateId);
      const shadowRoot = this.attachShadow({ mode: "open" });
      shadowRoot.appendChild(template.content.cloneNode(true));

      // Apply external styles to the shadow DOM
      const linkElem = document.createElement("link");
      linkElem.setAttribute("rel", "stylesheet");
      linkElem.setAttribute("href", "style.css");

      // Attach the created element to the shadow DOM
      shadowRoot.appendChild(linkElem);
    }
  });
}

createComponent('header-component', `
  <header class="blue-background">
    This <b><slot name="page">--</slot></b> page header was created by a template!
  </header>
`);

createComponent('footer-component', `
  <footer class="green-background">
    This <b><slot name="page">--</slot></b> page footer was created by a template!
  </footer>
`);
