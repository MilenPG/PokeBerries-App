import { doppio_One} from '../fonts/fonts';
import Image from 'next/image';

export default function Card({dataItem}) { 
    return (
        <li key={dataItem.id} className="card">
            <span className={`${doppio_One.className} antialiased card-title`}>
                {dataItem.name}
            </span>
            <Image
                className="card-img" 
                src= '/assets\berricon.png'
                alt={`${dataItem.name} image`}
                width={80}
                height={80}
            />
            <p className="card-info">{dataItem.url}</p>
        </li>
    )
}