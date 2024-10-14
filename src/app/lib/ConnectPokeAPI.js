const POKE_BERRIES_ENDPOINT = 'https://pokeapi.co/api/v2/berry/'
const POKE_ITEMS_ENDPOINT = 'https://pokeapi.co/api/v2/item/'

export const getBerryAPI = () => {
    const fetchAPI = fetch(POKE_BERRIES_ENDPOINT)
    .then((res) => res.json())
    .then((resBerries) => {
        const berries = resBerries.results
            console.log(berries[0].name) // chequeo recuperación de datos
            return berries;
                               
    })
    .catch((error) => {
        console.error("Error durante la solicitud de datos:", error);
    });

    return fetchAPI; 
}

/*export const getBerriesDetails = () => {
    const promises = berries.map(berry => 
        fetch(berry.url)
        .then(res => res.json()));

    return promises;
}*/

export const getItemsAPI = () => {
    const fetchAPI = fetch(POKE_ITEMS_ENDPOINT)
    .then((res) => res.json())
    .then((resitems) => {
        const items = resitems.results
            return items;
                               
    })
    .catch((error) => {
        console.error("Error durante la solicitud de datos:", error);
    });

    return fetchAPI; 
}

export const getItemsInfo = (itemId) => {
    const fetchAPI = fetch(`${POKE_ITEMS_ENDPOINT}/${itemId}?limit=20&offset=20"`)
    .then((res) => res.json())
    .then((resitems) => {
        const items = resitems
        return items;                       
    })
    .catch((error) => {
        console.error("Error durante la solicitud de datos:", error);
    });

    return fetchAPI; 
}