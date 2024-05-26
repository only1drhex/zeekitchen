import Image from "next/image"
import Button from "./button"


export default function Body() {
  return (
    <div className="mt-12 grid gap-4 md:grid-cols-2 items-center">


      <div>
        <h1 className=" px-12 font-bold text-5xl lg:leading-[4rem]">
          Savor the <br /> Flavor- Explore <br /> Our <span className="text-[#E9FF0C]">Culinary</span> Creations!
        </h1>
      </div>



      <div className="">
        <Image
          className=""
          width={480}
          height={480}
          src="img/splash.svg"
          alt="Splash Image"
        />
      </div>








    </div>

  )
}
