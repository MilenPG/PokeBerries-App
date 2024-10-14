import BerriesCards from "./components/berries-cards";
import Header from "./components/header";

export default function Home() {
   
  return (
    <div className="page-container home-background" >
      <main>
        <Header headerTitle={"Poké Berries"}/>
        <BerriesCards/>
      </main>
    </div>
  );
}