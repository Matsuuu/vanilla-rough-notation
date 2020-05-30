import { annotationGroup } from 'rough-notation';

export default class VanillaRoughNotationGroup extends HTMLElement {
    constructor() {
        super();
        this.annotationElements = [];
        this.showOnLoad = false;
    }

    setProperties() {
        this.showOnLoad = this.hasAttribute('showOnLoad');
    }

    connectedCallback() {
        this.setProperties();

        if (!this.shadowRoot) {
            this.attachShadow({ mode: 'open' });
        }
        this.shadowRoot.innerHTML = '<slot></slot>';

        this.annotationElements = this.shadowRoot
            .querySelector('slot')
            .assignedNodes()
            .filter((node) => node.nodeName === 'VANILLA-ROUGH-NOTATION');

        if (this.showOnLoad) {
            this.show();
        }
    }

    show() {
        if (this.annotationElements.some((el) => el.order)) {
            this.annotationElements.sort((a, b) => {
                return a.order - b.order;
            });
        }

        const ag = annotationGroup(this.annotationElements.map((ae) => ae.annotation));
        ag.show();
    }
}

if (!customElements.get('vanilla-rough-notation-group')) {
    customElements.define('vanilla-rough-notation-group', VanillaRoughNotationGroup);
}
