const URL = 'https://alchemy-pokedex.herokuapp.com/api/pokedex';
    
export function retrieveFromPokedex(options = {}) {

    const url = `${URL}?page=${options.page || 1}`;

    return fetch(url)
        .then(response => response.json());
}
