
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

import { getImagesByQuery } from "./js/pixabay-api";
import { createGallery, clearGallery, showLoader, hideLoader } from "./js/render-functions";

const input = document.querySelector('.search-input')
const form = document.querySelector('.form')

function searchImages(event) {
    event.preventDefault();
    const query = input.value.trim();

    if (!query.length) {
        return
    }

    clearGallery()
    
    
    showLoader()
    

    getImagesByQuery(query)
        
        .then(images => {
            
            if (images.length === 0) {
                iziToast.error({
                    position: 'topRight',
                    message: 'Sorry, there are no images matching your search query. Please try again!',
                });
                
            } else {
                createGallery(images);
            }
        })

        .catch(err => {
            console.error(err)
    })
        
        .finally(() => {
            hideLoader();
            form.reset();
        })
}
form.addEventListener('submit', searchImages);

