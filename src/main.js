
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

    hideLoadMoreButton();


    if (!query.length) {
        iziToast.error({
        position: 'topRight',
        message: 'Please fill out this field.',
    });
        return
    };

    if (query !== currentQuery) {
        clearGallery();
        currentQuery = query;
    }
    
    
    
    showLoader();

    try {
        const { hits, totalHits } = await getImagesByQuery(query, page);
        
            if (hits.length === 0) {
            iziToast.error({
                position: 'topRight',
                message: 'Sorry, there are no images matching your search query. Please try again!',
            });
            hideLoadMoreButton();
        } else {
                createGallery(hits);

            const { height: cardHeight } = document
            .querySelector(".gallery")
            .firstElementChild.getBoundingClientRect();

            window.scrollBy({
            top: cardHeight * 2,
            behavior: "smooth",
        });

            if (page * perPage < totalHits) {
                showLoadMoreButton();
            } else {
                hideLoadMoreButton();
                iziToast.info({ message: "No more images to load" });
                };
        };
    } catch (err){
        console.error(err);
        iziToast.error({
        position: 'topRight',
        message: 'Oops! Something went wrong. Please try again.'
    });
    }
    finally {
        hideLoader();

    }
    
};

async function loadMoreImages() {
    page++;

    hideLoadMoreButton();

    showLoader();

    try {
        const { hits, totalHits } = await getImagesByQuery(currentQuery, page);
        
        
        createGallery(hits);

        const { height: cardHeight } = document
            .querySelector(".gallery")
            .firstElementChild.getBoundingClientRect();

        window.scrollBy({
            top: cardHeight * 2,
            behavior: "smooth",
        });

        if (page * perPage < totalHits) {
            showLoadMoreButton();
        } else {
            hideLoadMoreButton();
            iziToast.info({ message: "No more images to load" });
        }

        
    } catch (err) {
        console.error(err)
        iziToast.error({
        position: 'topRight',
        message: 'Oops! Something went wrong. Please try again.'
    });
    }finally {
        hideLoader();
        
    }
    
}


form.addEventListener('submit', searchImages);
document.querySelector('.load-more-btn').addEventListener('click', loadMoreImages);

