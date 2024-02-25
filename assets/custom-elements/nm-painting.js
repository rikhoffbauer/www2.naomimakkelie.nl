 class NmPainting extends HTMLElement {
      connectedCallback() {
        this.metadata = {};
      }

      updateMetadata(name, value) {
        this.metadata[name] = value;
        this.render();
      }

      render() {
        const {
          name,
          imageUrl,
          altText,
          description,
          width,
          height,
          artMedium,
          dateCreated,
          creator,
          artworkSurface
        } = this.metadata;

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
