import styles from "./globals.css";
import LikeButton from "./components/like-button";
import Card from "./components/card";

   
function Header({ title }) {
  return <h1>{title ? title : 'Default title'}</h1>;
}

export default function Home() {
   
  return (
    <div className="home-container">
      <Header title="Develop. Preview. Ship." />
      <ul className="cards-container">
        <Card />
      </ul>
      <LikeButton />
    </div>
  );
}