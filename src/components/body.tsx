import Image from "next/image"


export default function Body() {
  return (
    <div className="mt-28 flex justify-between items-center">
        
   
    <h1 className=" px-12 font-bold text-5xl lg:leading-[4rem]">
            Savor the <br /> Flavor- Explore <br /> Our <span className="text-[#E9FF0C]">Culinary</span> Creations!
        </h1>
       


        <Image 
            className="absolute right-0 left-[25rem] lg:mt-36 w-[60%]" 
            width={80} 
            height={200} 
            src="img/splash.svg" 
            alt="Splash Image" 
        />
    
    
   
 
    <Image 
            className="absolute right-0 top-52  left-[0.5rem] lg:mt-36" 
            width={600} 
            height={100} 
            src="img/fft.svg" 
            alt="Splash Image" 
        />
    
   <div>
   <Image 
            className="absolute right-0 top-[30rem] left-[22rem] lg:mt-36 mb-10" 
            width={800} 
            height={100} 
            src="img/List.svg" 
            alt="Splash Image" 
        />
   </div>
   
    </div>  

  )
}
