import styles from "./globals.css";
import CardsContainer from "./components/cards-container";


   
function Header({ title }) {
  return <h1>{title ? title : 'Default title'}</h1>;
}

export default function Home() {
   
  return (
    <div className="home-container">
      <Header title="Poké - Berries" />
      <CardsContainer />
    </div>
  );
}