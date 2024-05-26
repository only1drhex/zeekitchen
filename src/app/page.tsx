import Image from "next/image";
import Navbar from "../components/navbar";
import Body from "../components/body";
import Button from "../components/button";
import Carousel from "../components/carousel";
import Fft from "../components/fft";

export default function Home() {
  return (

    <div className="relative min-h-screen overflow-x-hidden">
      <Image className="absolute right-0 left-[86%] xl:left-auto xl:flex xl:right-0" width={400} height={62} src="img/blob.svg" alt="" />
      <Image className="hidden absolute sm:block md:right-0 md:top-0 sm:left-[60%] md:left-[60%] lg:left-[55%] xl:left-[50%] 2xl:left-[48%] " width={80} height={80} src="img/dish.svg" alt="" />
      <Image className="absolute right-0 left-[13%]" width={60} height={80} src="img/pineapple.svg" alt="" />

      <Image className="absolute bottom-0 top-[32rem]" width={60} height={60} src="img/plus.svg" alt="" />
      <Image className="absolute bottom-0 right-0" width={60} height={60} src="img/blackplus.svg" alt="" />
      <Navbar />
      <Body />
      <Fft />
      <Carousel />
    <Button />




    </div>
  );
}
