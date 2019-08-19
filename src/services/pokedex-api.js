const URL = 'https://alchemy-pokedex.herokuapp.com/api/pokedex';
    
export function retrieveFromPokedex(options = {}) {

    const url = `${URL}?sort=id&pokemon=${options.pokemon || ''}&page=${options.page || 1}${options.type ? `&type=${options.type}` : ``}&perPage=40`;

    return fetch(url)
        .then(response => response.json());
}
