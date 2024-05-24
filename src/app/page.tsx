import Image from "next/image";
import Navbar from "../components/navbar";
import Body from "../components/body";
import Button from "../components/button";


export default function Home() {
  return (
  
    <main className="relative min-h-screen">
      <Image  className="absolute right-0 sm:hidden md:flex md:left-[85.8%]" width={400} height={62} src="img/blob.svg" alt="" />
      <Image  className="absolute right-0 left-[62%]" width={180} height={800} src="img/dish.svg" alt="" />
      <Image  className="absolute right-0 left-[15%]" width={60} height={80} src="img/pineapple.svg" alt="" />
      
      <Image  className="absolute bottom-0 top-[26rem] left-800" width={60} height={60} src="img/plus.svg" alt="" />
      <Image  className="absolute bottom-0 top-[38rem] left-[89.9rem]" width={60} height={60} src="img/blackplus.svg" alt="" />
      
     <Navbar />
      <Body />
     <Button />

     

    </main>
  );
}
