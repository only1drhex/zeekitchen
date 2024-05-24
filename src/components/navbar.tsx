import Image from "next/image"
 
export default function Navbar() {
  return (
    <header className="">
<div className="sticky container px-4 sm:px-6 lg:px-">
    <div className=" sticky flex flex-row items-center justify-between">
        {/* image */}
        <div className="mt-1 mb-3">
            <a href="/" title="" className="outline-none">
                <Image width={200} height={800} src="img/logo.svg" alt="" />
            </a>
        </div>
        {/* navbar list */}
        <div className="hidden lg:flex lg:ml-16 basis-1/2 gap-20 lg:mt-2 lg:items-center lg:justify-center lg:space-x-28">
        <a href="#" title="" className=" text-xl font-bold text-gray-900 transition-all duration-200 rounded focus:outline-none font-pj hover:text-opacity-50 focus:ring-1 focus:ring-gray-900 focus:ring-offset-2"> Home </a>

<a href="#" title="" className="text-xl font-bold text-gray-900 transition-all duration-200 rounded focus:outline-none font-pj hover:text-opacity-50 focus:ring-1 focus:ring-gray-900 focus:ring-offset-2"> Contact </a>

<a href="#" title="" className="text-xl font-bold text-gray-900 transition-all duration-200 rounded focus:outline-none font-pj hover:text-opacity-50 focus:ring-1 focus:ring-gray-900 focus:ring-offset-2"> About Us </a>
        </div>
        {/* navbar socials */}

        <div className="hidden lg:flex basis-1/12 mt-4 z-40 lg:-mr-40">
            <a href=""><Image src="img/ig.svg" width="57" height="57" alt="" /></a>
            <a href=""> <Image src="img/fb.svg" width="57" height="57" alt="" /> </a>
            <a href="">  <Image src="img/snapchat.svg" width="57" height="57" alt="" /></a>
        </div>
    </div>

</div>
    </header>
  )
}

 