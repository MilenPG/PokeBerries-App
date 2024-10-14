"use client";
import { useEffect, useState } from 'react';
import { getItemsAPI, getItemsInfo } from '../lib/ConnectPokeAPI';
import Card from './card';
import Pagination from '@mui/material/Pagination';
import styles from '../home.module.css'

export default function ItemsCards() {
  const [itemsArray, setItemsArray] = useState([]); // Estado inicial como array vacío
  //const [loading, setLoading] = useState(true); // Estado de carga
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  useEffect(() => {
    getItemsAPI()
      .then(async (data) => {
        const itemsAll = data.map(item => getItemsInfo(item.name));
        const results = await Promise.allSettled(itemsAll);

        // Filtramos solo los resultados exitosos
        const fetchedItems = results
          .filter(result => result.status === 'fulfilled')
          .map(result => result.value);

        setItemsArray(fetchedItems);
       // setLoading(false);
      })
      .catch(err => {
        console.error('Error fetching items:', err);
       // setLoading(false);
      });
  }, []); // solo se ejecuta una vez al montar el componente, si no, entra en loop

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = itemsArray.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(itemsArray.length / itemsPerPage);

  const handlePageChange = (event, value) => {
    setCurrentPage(value);
  };

  //if (loading) return <p>Loading...</p>; // Muestra carga mientras se obtienen los datos

  return (
    <>
      <ul className="items-cards">
        {currentItems.map((item) => (
          <Card 
            dataProps={{
              id: item.id,
              name: item.name,
              image: item.sprites.default, 
              extra: ''
            }}
          />
        ))}
      </ul>
      <Pagination
        count={totalPages}
        page={currentPage}
        onChange={handlePageChange}
        shape="rounded"
        className={styles.pagination}
      />
    </>
  );
}