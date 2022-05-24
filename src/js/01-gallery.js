// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

import SimpleLightbox from "simplelightbox";

import "simplelightbox/dist/simple-lightbox.min.css";

console.log(galleryItems);

const galleryBox = document.querySelector('.gallery');

const galleryEl = createGallery(galleryItems);
galleryBox.insertAdjacentHTML("afterbegin", galleryEl);

function createGallery(images) {
    return images.map(({ preview, original, description }) =>        
    `<li class="gallery__link">
        <a class="gallery__item" href="${original}">
            <img class="gallery__image" src="${preview}" alt="${description}" />
        </a>
    </li>`).join("");
};

let gallery = new SimpleLightbox('.gallery a', {captionsData: 'alt', captionDelay: 250,});
