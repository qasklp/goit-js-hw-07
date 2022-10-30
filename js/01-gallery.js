import { galleryItems } from './gallery-items.js';

// Change code below this line
const gallery = document.querySelector(".gallery");
const render = galleryItems
  .map(item => `<a class="gallery__item" href="${item.original}">
  <img class="gallery__image" src="${item.preview}" alt="${item.description}" />
</a>
    `)
    .join("");
gallery.insertAdjacentHTML("afterbegin", render);
gallery.addEventListener("click", handleClick);

function handleClick(event) {
    event.preventDefault();

    if (event.target.nodeName != 'IMG') {
        return;
    }

    const selectedImg = event.target.getAttribute('data-source');

    const instance = basicLightbox.create(`<img src="${selectedImg}" width="800" height="600">`);
    instance.show();

    gallery.addEventListener('keydown', (event) => {
        if (event.key === "Escape") {
            instance.close()
        }
    })
}

