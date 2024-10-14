"use client"
import { useEffect, useState } from 'react'
import { getBerryAPI } from '../lib/ConnectPokeAPI';
import Card from './card';

export default function BerriesCards() {
     const [berriesArray, setBerriesArray] = useState([]); // estado inicial como array vacío
     const [loading, setLoading] = useState(true); // estado de carga
     useEffect(() => {
        getBerryAPI().then(setBerriesArray); // seteo la variable a partir        
        
       /* const promises = berriesArray.map(berry =>
            fetch(berry.url)
            .then(res => res.json().natural_gift_type.name));     
        
        Promise.all(promises)
        .then(berriesDetails => {
            setBerriesArray(berriesDetails);
            setLoading(false); // se cargaron los datos de todas las berries
          });*/
    }, [])
    
    //console.log(berriesArray);
    
    //por cada objeto, renderiza una card con sus respectivas props
    return (
        <ul className="berries-cards">
        {berriesArray.map((berry) => (
            // eslint-disable-next-line react/jsx-key
            <Card 
            dataProps={berry}
            />
          ))}       
        </ul>
    )
}