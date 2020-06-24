import { annotate } from 'rough-notation';

export default class VanillaRoughNotation extends HTMLElement {
    constructor() {
        super();
        this.type = 'underline';
        this.animation = true;
        this.animationDuration = 800;
        this.animationDelay = 0;
        this.color = 'currentColor';
        this.strokeWidth = 1;
        this.padding = 5;
        this.showOnLoad = false;
        this.order = 0;
        this.brackets = 'right';
        this.multiline = true;

        this.annotation = null;
    }

    setAttributes() {
        this.type = this.getAttribute('type') || this.type;
        this.animation = this.hasAttribute('animation') ? this.getAttribute('animation') === 'true' : this.animation;
        this.animationDuration = this.getAttribute('animationDuration') || this.animationDuration;
        this.animationDelay = this.getAttribute('animationDelay') || this.animationDelay;
        this.color = this.getAttribute('color') || this.color;
        this.strokeWidth = this.getAttribute('strokeWidth') || this.strokeWidth;
        this.padding = this.getAttribute('padding') || this.padding;
        this.showOnLoad = this.hasAttribute('showOnLoad');
        this.order = this.getAttribute('order') || this.order;
        this.multiline = this.hasAttribute('multiline') ? this.getAttribute('multiline') === 'true' : this.multiline;
        this.brackets = this.getBrackets();
    }

    /**
     * Passing arrays into web components as attributes is a bit
     * yucky but we'll have to work with that so we have a smooth experience.
     *
     * JSON.parse expects the elements to be quoted with double quotes
     * */
    getBrackets() {
        let brackets = this.getAttribute('brackets') || this.brackets;
        if (brackets.includes('[')) {
            brackets = JSON.parse(brackets.replace(/\'/g, '"'));
        }
        return brackets;
    }

    connectedCallback() {
        this.setAttributes();
        if (!this.shadowRoot) {
            this.attachShadow({ mode: 'open' });
        }
        this.shadowRoot.innerHTML = '<slot></slot>';
        const assignedNodes = this.shadowRoot
            .querySelector('slot')
            .assignedNodes()
            .filter((node) => node instanceof HTMLElement);

        assignedNodes.forEach((an) => {
            this.annotation = annotate(an, {
                type: this.type,
                animate: this.animate,
                animationDuration: this.animationDuration,
                animationDelay: this.animationDelay,
                color: this.color,
                strokeWidth: this.strokeWidth,
                padding: this.padding,
                brackets: this.brackets,
                multiline: this.multiline,
            });
        });
        // Clone the style element from the windows styles to shadow dom.
        this.append(window.__rno_kf_s.cloneNode(true));
        // Give the shadow dom time to realise the style element
        setTimeout(() => {
            if (this.showOnLoad) {
                this.annotation.show();
            }
        }, 50);
    }

    isShowing() {
        return this.annotation != null && this.annotation.isShowing();
    }

    show() {
        if (this.annotation) {
            this.annotation.show();
        }
    }

    hide() {
        if (this.annotation) {
            this.annotation.hide();
        }
    }

    remove() {
        if (this.annotation) {
            this.annotation.remove();
        }
    }
}

if (!customElements.get('rough-notation')) {
    customElements.define('rough-notation', VanillaRoughNotation);
}
