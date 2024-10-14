import { dotGothic16 } from "../fonts/fonts";


export default function Header({headerTitle}) {
    return (
    <header>  
      <h1 className={`${dotGothic16.className} antialiased`}>{headerTitle}</h1>   
    </header>
  );
  }
 
  // <img 
  // className="pokeberry-icon"
  // src="https://github.com/MilenPG/PokeBerries-App/blob/main/src/app/assets/berricon.png?raw=true"
  // alt="pokeberry"
  // />