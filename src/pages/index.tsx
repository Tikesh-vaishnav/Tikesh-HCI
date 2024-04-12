import Image from "next/image";
import { Inter } from "next/font/google";
import Navbar from "../components/Navbar";
import Mainfold from "../components/Mainfold";
import Footer from "../components/Footer";
import LastFold from "../components/Lastfold";
import Order from "../components/Order";
import SecondFold from "../components/Secondfold";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={`flex min-h-screen flex-col items-center justify-between ${inter.className}`}>
     <Navbar/>
     <Mainfold/>
     <SecondFold/>
     <Order/>
     <LastFold/>
     <Footer/>
    </main>
  );
}
