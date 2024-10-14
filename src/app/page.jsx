import BerriesCards from "./components/berries-cards";
import Header from "./components/header";

export default function Home() {
   
  return (
    <main className="page-container home-background" >
        <Header headerTitle={"Poké Berries"}/>
        <BerriesCards/>
    </main>
  );
}