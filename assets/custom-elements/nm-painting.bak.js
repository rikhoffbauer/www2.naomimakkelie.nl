
    /**
     * Represents a painting gallery item web component.
     * Shows an image with the painting description beneath it.
     * Also adds microdata attributes to the appropriate elements
     * and insert a JSON-LD script element as an alternative to microdata.

     * @class
     * @extends HTMLElement
     */
  class NmPainting extends HTMLElement {
      connectedCallback() {
        const imageUrl = this.getAttribute('image-url');
        const altText = this.getAttribute('alt-text');
        const description = this.getAttribute('description');
        const width = this.getAttribute('width');
        const height = this.getAttribute('height');
        const artMedium = this.getAttribute('art-medium');
        const dateCreated = this.getAttribute('date-created');
        const creator = this.getAttribute('creator');
        const artworkSurface = this.getAttribute('artwork-surface');
        const name = this.getAttribute('name');

        this.innerHTML = `
          <figure itemscope itemtype="https://schema.org/Painting">
            <img src="${imageUrl}" alt="${altText}" itemprop="image" />
            <figcaption>
              <pre itemprop="description">${description}</pre>
              <meta itemprop="width" content="${width}" />
              <meta itemprop="height" content="${height}" />
              <meta itemprop="artMedium" content="${artMedium}" />
              <meta itemprop="dateCreated" content="${dateCreated}" />
              <meta itemprop="creator" content="${creator}" />
              <meta itemprop="artworkSurface" content="${artworkSurface}" />
              <meta itemprop="name" content="${name}" />
            </figcaption>
            <script type="application/ld+json">
            {
              "@context": "https://schema.org",
              "@type": "Painting",
              "name": "${name}",
              "description": "${description}",
              "width": "${width}",
              "height": "${height}",
              "artMedium": "${artMedium}",
              "dateCreated": "${dateCreated}",
              "creator": {
                "@type": "Person",
                "name": "${creator}"
              },
              "artworkSurface": "${artworkSurface}",
              "image": "${imageUrl}"
            }
            </script>
          </figure>
        `;
      }
    }

    customElements.define('nm-painting', NmPainting);
