"use client"
import { useEffect, useState } from 'react'
import { getPokeAPI } from '../lib/ConnectPokeAPI';
import { doppio_One} from '../fonts/fonts';
import Image from 'next/image';

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
                <span className={`${doppio_One.className} antialiased card-title`}>{berry.name}</span>
                <Image
                    className="card-img" 
                    src= '/assets/pokebackground.png'
                    alt={`${berry.name} image`}
                    width={80}
                    height={80}
                />
                <p className="card-info">{berry.url}</p>
            </li>
          ))}
        </>
    )
}