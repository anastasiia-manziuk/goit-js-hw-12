
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

import { getImagesByQuery } from "./js/pixabay-api";
import { createGallery, clearGallery, showLoader, hideLoader, showLoadMoreButton, hideLoadMoreButton} from "./js/render-functions";

const input = document.querySelector('.search-input');
const form = document.querySelector('.form');

    let page = 1;
    let perPage = 15;
    
    let currentQuery = '';


async function searchImages(event) {
    event.preventDefault();
    const query = input.value.trim();
    page = 1;


    if (!query.length) {
        return
    };

    if (query !== currentQuery) {
        clearGallery();
        currentQuery = query;
        form.reset();
    }
    
    
    
    showLoader();

    try {
        const images = await getImagesByQuery(query, page);
            if (images.length === 0) {
            iziToast.error({
                position: 'topRight',
                message: 'Sorry, there are no images matching your search query. Please try again!',
            });
        } else {
            createGallery(images);
            showLoadMoreButton();
            if (images.length < perPage) {
                hideLoadMoreButton();
                iziToast.info({ message: "No more images to load" });
            }
        }
    } catch (err){
        console.error(err)
    }
    finally {
        hideLoader();

    }
    
};

async function loadMoreImages() {
    const query = input.value.trim();
    page++;

    showLoader();

    try {
        const images = await getImagesByQuery(currentQuery, page);
        
        createGallery(images);

        if (images.length < perPage) {
                hideLoadMoreButton();
                iziToast.info({ message: "No more images to load" });
            }

        
    } catch (err) {
        console.error(err)
    }finally {
        hideLoader();
        
    }
    
}


form.addEventListener('submit', searchImages);
document.querySelector('.load-more-btn').addEventListener('click', loadMoreImages);

