"use client";
import { useEffect, useState } from 'react';
import { getBerryAPI } from '../lib/ConnectPokeAPI';
import Card from './card';
import Pagination from '@mui/material/Pagination';
import styles from '../home.module.css'

export default function BerriesCards() {
  const [berriesArray, setBerriesArray] = useState([]);
  //const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  useEffect(() => {
    getBerryAPI()
      .then(data => {
        setBerriesArray(data);
      })
  }, []);

  //lógica de paginación: 
  const indexOfLastBerry = currentPage * itemsPerPage;
  const indexOfFirstBerry = indexOfLastBerry - itemsPerPage;
  const currentBerries = berriesArray.slice(indexOfFirstBerry, indexOfLastBerry);
  const totalPages = Math.ceil(berriesArray.length / itemsPerPage);

  const handlePageChange = (event, value) => {
    setCurrentPage(value);
  };

  //if (loading) return <p>Loading...</p>;

  return (
    <>
      <ul className="berries-cards">
        {currentBerries.map((berry) => (
          <Card dataProps={berry} />
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
