import Header from "../components/header";
import LocationsCards from "../components/locations-cards";


export default function Locations() {
   
  return (
    <div className="page-container locations-background" >
      <Header headerTitle={"Poké Locations"}/>
      <ul className="cards-container">
        <LocationsCards/>
      </ul>
    </div>
  );
}