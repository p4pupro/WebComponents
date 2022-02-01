
class WebComponent extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  static get styles() {
    return /* css */`
      .container {
        width: var(--width);
        height: var(--height);
        position: relative;
      }
    `;
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowRoot.innerHTML = /* html */`
    <style>${WebComponent.styles}</style>
    <div class="container">
      <h1>Welcome to WebComponents Boilerplate</h1>
      <p>This is a single boilerplate for creating WebComponents.</p>
    </div>`;
  }
}

customElements.define("web-component", WebComponent);