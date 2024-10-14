"use client"
import { useEffect, useState } from 'react'
import { getItemsAPI, getItemsInfo } from '../lib/ConnectPokeAPI';
import Card from './card';

export default function ItemsCards() {
     //let currentItemsArray = [];
     let itemProps = {
        id: '',
        name: '',
        image: '',
        extra: ''};
     const [itemsArray, setItemsArray] = useState([]); // estado inicial como array vacío
     const [loading, setLoading] = useState(true); // estado de carga
          
    useEffect(() => {
        getItemsAPI()
        .then(setItemsArray) // seteo la variable a partir de la respuesta                
    }, [itemsArray])

    const itemsAll = itemsArray.map((item) => {
        const itemId = item.name
        return getItemsInfo(itemId)
    })

    /*
    Promise.allSettled(itemsAll)
    .then((itemsAll) => {
        itemsAll.map((response) => {
            const itemObject = response.value
            itemProps = {
                id: itemObject.id,
                name: itemObject.name,
                image: itemObject.sprites.default,
                extra: itemObject
            }           
        return currentItemsArray.push(itemProps);
        }) 
        //console.log(currentItemsArray[0])
      })

      .catch((error) => {
        console.error(error)
      })
    */

    return (
        <ul className="items-cards">
        {itemsArray.map((item) => (
            // eslint-disable-next-line react/jsx-key
            <Card 
            dataProps={{
                id: item.name,
                name: item.name,
                image: '',
                extra:''
            }}
            />
          ))}       
        </ul>
    )
}