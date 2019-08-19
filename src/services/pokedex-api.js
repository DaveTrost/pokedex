const URL = 'https://alchemy-pokedex.herokuapp.com/api/pokedex';
    
export function retrieveFromPokedex(options = {}) {

    const url = `${URL}?pokemon=${options.pokemon || ''}&page=${options.page || 1}`;

    return fetch(url)
        .then(response => response.json());
}
