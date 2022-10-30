import { galleryItems } from './gallery-items.js';

// Change code below this line
const gallery = document.querySelector(".gallery");
const render = galleryItems
  .map(item => `<div class="gallery__item">
    <a class="gallery__link" href="${item.original}">
        <img
        class="gallery__image"
        src="${item.preview}"
        data-source="${item.original}"
        alt="${item.description}"
        />
    </a>
    </div>
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

    const instance = basicLightbox.create(`<img src="${selectedImg}" width="800" height="600">`, { onShow: () => document.addEventListener('keydown', escClose) , onClose: () => document.removeEventListener('keydown', escClose) });
    instance.show();

    document.addEventListener('keydown', escClose)

    function escClose(event) {
        if (event.key === "Escape") {
            instance.close()
        }
    }
}

