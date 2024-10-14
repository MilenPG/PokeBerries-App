const POKE_BERRIES_ENDPOINT = 'https://pokeapi.co/api/v2/berry/'
const POKE_LOCATIONS_ENDPOINT = 'https://pokeapi.co/api/v2/location/'

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

export const getLocationsAPI = () => {
    const fetchAPI = fetch(POKE_LOCATIONS_ENDPOINT)
    .then((res) => res.json())
    .then((reslocations) => {
        const locations = reslocations.results
            console.log(locations[0].name) // chequeo recuperación de datos
            return locations;
                               
    })
    .catch((error) => {
        console.error("Error durante la solicitud de datos:", error);
    });

    return fetchAPI; 
}