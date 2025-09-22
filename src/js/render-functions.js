import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const lightbox = new SimpleLightbox('.gallery a');

export function createGallery(images) {

    const markup = images
        .map(image => {
            const { webformatURL, largeImageURL, tags, likes, views, comments, downloads } = image;
            return `<li class="gallery-item"><a href="${image.largeImageURL}">
                <img class="gallery-image" src="${image.webformatURL}" alt="${image.tags}"/>
                </a>
                <ul class="info">
                    <li class="info-item">
                    <p class="text">Likes:</p>
                    <span class="number">${image.likes}</span>
                    </li>

                    <li class="info-item">
                    <p class="text">Views:</p>
                    <span class="number">${image.views}</span>
                    </li>

                    <li class="info-item">
                    <p class="text">Comments:</p>
                    <span class="number">${image.comments}</span>
                    </li>

                    <li class="info-item">
                    <p class="text">Downloads:</p>
                    <span class="number">${image.downloads}</span>
                    </li>

                </ul>
                </li>`
        })
        .join('')
        document.querySelector('.gallery').innerHTML = markup;

    
    lightbox.refresh();
}


export function clearGallery() {
    document.querySelector('.gallery').innerHTML = '';
}

export function showLoader() {
    document.querySelector('.loader').classList.add('is-open');
}


export function hideLoader() {
    document.querySelector('.loader').classList.remove('is-open');
}
