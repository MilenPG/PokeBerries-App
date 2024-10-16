import "./globals.css";
import { dosis } from "./fonts/fonts";
import Nav from "./components/navigation";


export const metadata = {
  title: "Poké Stuff ¡Find your favourite!",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      
      <body className={`${dosis.className} antialiased`}>
        <Nav/>
        {children}
      </body>
    </html>
  );
}
