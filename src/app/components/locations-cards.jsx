"use client"
import { useEffect, useState } from 'react'
import { getLocationsAPI } from '../lib/ConnectPokeAPI';
import Card from './card';

export default function LocationsCards() {
     const [locationsArray, setLocationsArray] = useState([]); // estado inicial como array vacío
     const [loading, setLoading] = useState(true); // estado de carga
     useEffect(() => {
        getLocationsAPI().then(setLocationsArray); // seteo la variable a partir        

            setLoading(false); // se cargaron los datos de todas las locations
    }, [])
    
    //console.log(locationsArray);
    
    //por cada objeto, renderiza una card con sus respectivas props
    return (
        <ul className="locations-cards">
        {locationsArray.map((location) => (
            // eslint-disable-next-line react/jsx-key
            <Card dataItem={location}/>
          ))}       
        </ul>
    )
}