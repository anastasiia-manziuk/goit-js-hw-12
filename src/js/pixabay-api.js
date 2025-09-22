import axios from "axios";


export function getImagesByQuery(query){

    return axios.get('https://pixabay.com/api/', {
        params: {
            key: '52365869-dd7c55ea3ac5eab5a979f8f09',
            q: query,
            image_type: 'photo',
            orientation: 'horizontal',
            safesearch: true,
            per_page: 9
        }
    })

        .then(res => res.data.hits)
        .catch(err => console.error(err));
}