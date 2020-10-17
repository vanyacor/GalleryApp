const CLIEN_TOKEN = 'cf49c08b444ff4cb9e4d126b7e9f7513ba1ee58de7906e4360afc1a33d1bf4c0';

export const photosAPI = {
    getUsers(page = 1, size = 10) {
        return fetch(`https://api.unsplash.com/photos/?client_id=${CLIEN_TOKEN }&page=${page}&per_page=${size}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(response => response.json());

    }
}