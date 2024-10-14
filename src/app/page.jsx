import styles from "./globals.css";
import CardsContainer from "./components/cards-container";
import Header from "./components/header";

export default function Home() {
   
  return (
    <div className="home-container">
      <Header />
      <CardsContainer />
    </div>
  );
}