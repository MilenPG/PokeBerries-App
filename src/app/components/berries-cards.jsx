"use client";
import { useEffect, useState } from 'react';
import { getBerryAPI, getItemsInfo } from '../lib/ConnectPokeAPI';
import Card from './card';
import Pagination from '@mui/material/Pagination';
import styles from '../home.module.css'

export default function BerriesCards() {
  const [berriesArray, setBerriesArray] = useState([]);
  //const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1); // setea la variable de acuerdo a la paginación
  const itemsPerPage = 6;

  useEffect(() => {
    getBerryAPI()
      .then(async (data) => {
        setBerriesArray(data);
      //como las imágenes de las berries están en su propiedad item, que es otro endpoint, accederé a ellas mediante la función ya creada
      const berriesAll = data.map(berry => getItemsInfo(`${berry.name}-berry`)); 
      const results = await Promise.allSettled(berriesAll);

      // filtramos solo los resultados exitosos
      const fetchedItemsBerries = results
        .filter(result => result.status === 'fulfilled')
        .map(result => result.value);

       // setLoading(false);
       setBerriesArray(fetchedItemsBerries)
       console.log(berriesArray)
      })
  
      .catch(err => {
        console.error('Error fetching items:', err);
       // setLoading(false);;
      })    
  }, []);

  //lógica de paginación: 
  const indexOfLastBerry = currentPage * itemsPerPage; // identificar último índice del conjunto
  const indexOfFirstBerry = indexOfLastBerry - itemsPerPage; // identificar primer índice
  const currentBerries = berriesArray.slice(indexOfFirstBerry, indexOfLastBerry); //cantidad de eltos totales
  const totalPages = Math.ceil(berriesArray.length / itemsPerPage); //calculo cantidad de páginas 

  const handlePageChange = (event, value) => {
    setCurrentPage(value); 
  };

  //if (loading) return <p>Loading...</p>;

  return (
    <>
      <ul className="berries-cards">
        {currentBerries.map((berry) => (
          <Card 
          key={berry.id}
          dataProps={{
            id: berry.id,
            name: berry.name,
            image: berry.sprites.default, 
            extra: berry.name[8].name
          }} />
        ))}
      </ul>

      <Pagination
        count={totalPages}
        page={currentPage}
        onChange={handlePageChange}
        color="standard"
        shape="rounded"
        className={styles.pagination}
      />
    </>
  );
}
