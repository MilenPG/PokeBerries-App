import Header from "../components/header";
import ItemsCards from "../components/items-cards";

export default function Items() {
   
  return (
    <main className="page-container items-background" >
      <Header headerTitle={"Poké Items"}/>
      <ItemsCards/>
    </main>
  );
}