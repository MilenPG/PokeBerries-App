"use client"
import { useEffect, useState } from 'react'
import { getPokeAPI } from '../lib/ConnectPokeAPI';

export default function Card() {
     const [berriesArray, setBerriesArray] = useState([]); // estado inicial como array vacío
     const [loading, setLoading] = useState(true); // estado de carga
     useEffect(() => {
        getPokeAPI().then(setBerriesArray); // seteo la variable a partir        
        
       /* const promises = berriesArray.map(berry =>
            fetch(berry.url)
            .then(res => res.json().natural_gift_type.name));     
        
        Promise.all(promises)
        .then(berriesDetails => {
            setBerriesArray(berriesDetails);
            setLoading(false); // se cargaron los datos de todas las berries
          });*/
    }, [])
    
     console.log(berriesArray); //recupero array de objetos

    return (
        <>
        {berriesArray.map((berry) => (
            <li key={berry.id} className="card">
                <span>{berry.name}</span>
                <img 
                    className="card-img" 
                    src= 'https://github.com/MilenPG/PokeBerries-App/blob/card-dev/src/app/assets/berricon.png?raw=true'
                    alt={berry.name}>
                </img>
                <p className="card-info">{berry.url}</p>
            </li>
          ))}
        </>
    )
}