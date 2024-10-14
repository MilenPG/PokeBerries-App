"use client";
import { useEffect, useState } from 'react';
import { getBerryAPI } from '../lib/ConnectPokeAPI';
import Card from './card';
import Pagination from '@mui/material/Pagination';

export default function BerriesCards() {
  const [berriesArray, setBerriesArray] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  useEffect(() => {
    getBerryAPI()
      .then(data => {
        setBerriesArray(data);
      })
  }, []);

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
        variant="outlined"
        shape="rounded"
        style={{marginTop: '20px', display: 'flex', flexDirection:'row', justifyContent: 'space-around' }}
      />
    </>
  );
}
