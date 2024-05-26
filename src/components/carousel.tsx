import Image from 'next/image'
import React from 'react'

export default function Carousel() {
  return (
    <div className="flex justify-center items-center">
        <Image        
          className=""
          width={800}
          height={800}
          src="img/List.svg"
          alt="List Image"
        />
      </div>


  )
}

