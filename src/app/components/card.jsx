import { doppio_One} from '../fonts/fonts';
//import Image from 'next/image';

export default function Card({dataProps}) { 
    return (
        <li key={dataProps.id} className="card">
            <img
                className="card-img" 
                src= {dataProps.image} 
                alt={`${dataProps.name} image`}
            />
            <span className={`${doppio_One.className} antialiased card-title`}>
                {dataProps.name}
            </span>
            <p className="card-info">{dataProps.extra}</p>
        </li>
    )
}