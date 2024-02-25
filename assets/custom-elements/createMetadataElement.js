class NmMetadataElement extends HTMLElement {
      constructor() {
        super();
        this.connected = false;
      }

      connectedCallback() {
        this.connected = true;
        this.updateParent();
      }

      disconnectedCallback() {
        this.connected = false;
      }

      attributeChangedCallback() {
        if (this.connected) {
          this.updateParent();
        }
      }

      updateParent() {
        const parent = this.parentNode;
        if (parent instanceof NmPainting) {
          parent.updateMetadata(this.name, this.textContent);
        }
      }

      render() {
        this.innerHTML = ``;
      }

      static get observedAttributes() {
        return ['name'];
      }
    }

    // Factory function to create instances of metadata custom elements
    function createMetadataElement(elementName) {
      customElements.define(elementName, class extends NmMetadataElement {
        get name() {
          return elementName.replace('nm-', '');
        }
      });
    }
