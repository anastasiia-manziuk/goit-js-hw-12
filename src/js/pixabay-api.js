import axios from "axios";


export async function getImagesByQuery(query, page) {
    try {
        const res = await axios.get('https://pixabay.com/api/', {
            params: {
                key: '52365869-dd7c55ea3ac5eab5a979f8f09',
                q: query,
                image_type: 'photo',
                orientation: 'horizontal',
                safesearch: true,
                per_page: 15,
                page: page,
            }
        })
        return res.data.hits;
    }
    catch (err) {
        console.error(err);
        
    }
}