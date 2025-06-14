import Image from "next/image"
import Link from "next/link"

export default function Navbar() {
    return (
        <nav className="">
            <div className="sm:container sm:mx-auto px-4 py-2 flex items-center justify-evenly sm:justify-between">
                {/* Logo */}
                <div className="basis-[68%] sm:basis-1/4 flex-shrink-0">
                    <Image src="img/logo.svg" alt="Logo" width={160} height={160} />
                </div>
                <div className="flex items-center justify-center rounded-xl px-1 shadow-md md:hidden w-12 h-12">
                <Image src="img/burger.svg" width={30} height={30} alt="" />

                </div>
                {/* Links */}
                <div className="hidden md:flex basis-1/2 space-x-12 gap-12 mx-auto">

                    <a className="hover:text-gray-300 font-extrabold text-xl">Home</a>
                    <a className="hover:text-gray-300 font-extrabold text-xl">${process.env.NEXT_PUBLIC_CIB}</a>
                    <a className="hover:text-gray-300 font-extrabold text-xl">About</a>

                </div>
                {/* Social Icons */}
                <div className=" basis-1 hidden md:flex space-x-4 z-40 ml-auto">
                    <Image src="img/fb.svg" width={40} height={40} alt="" />
                    <Image src="img/ig.svg" width={40} height={40} alt="" />
                    <Image src="img/snapchat.svg" width={40} height={40} alt="" />
                </div>
            </div>
        </nav>
    )
}

