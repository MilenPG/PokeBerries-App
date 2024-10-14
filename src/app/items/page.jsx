import Header from "../components/header";
import ItemsCards from "../components/items-cards";


export default function Items() {
   
  return (
    <div className="page-container items-background" >
      <Header headerTitle={"Poké Items"}/>
      <ul className="cards-container">
        <ItemsCards/>
      </ul>
    </div>
  );
}