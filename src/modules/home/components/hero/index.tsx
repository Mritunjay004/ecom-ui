"use client"

import React from "react"
import { Button, Heading } from "@medusajs/ui"
import Image from "next/image"
import Link from "next/link"
import useEmblaCarousel from "embla-carousel-react"
import Autoplay from "embla-carousel-autoplay"

function Hero() {
  const [emblaRef] = useEmblaCarousel({ loop: false }, [Autoplay()])

  // image urls
  const images = [
    "https://static.wixstatic.com/media/ad420a_66bb032f4e6e4ab6adf8d2642f5000e0~mv2_d_5472_3648_s_4_2.jpg/v1/fill/w_3024,h_1502,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/ad420a_66bb032f4e6e4ab6adf8d2642f5000e0~mv2_d_5472_3648_s_4_2.jpg",
    "https://static.wixstatic.com/media/ad420a_49acd0b6db4e4e58a2f753c9abcb2e10~mv2_d_3818_2546_s_4_2.jpg/v1/fill/w_1960,h_1502,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/ad420a_49acd0b6db4e4e58a2f753c9abcb2e10~mv2_d_3818_2546_s_4_2.jpg",
    "https://static.wixstatic.com/media/ad420a_504f6c7af23a40d096817ce8903c6c5e~mv2_d_6240_4160_s_4_2.jpg/v1/fill/w_3024,h_1502,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/ad420a_504f6c7af23a40d096817ce8903c6c5e~mv2_d_6240_4160_s_4_2.jpg",
    "https://static.wixstatic.com/media/ad420a_35126ea55d8249c08c638a8478dada30~mv2_d_4032_3024_s_4_2.jpg/v1/fill/w_3024,h_1502,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/ad420a_35126ea55d8249c08c638a8478dada30~mv2_d_4032_3024_s_4_2.jpg",
  ]

  return (
    <div className="relative embla" ref={emblaRef}>
      <div className="embla__container">
        {images.map((image, index) => (
          <div key={index} className=" embla__slide">
            <Image
              src={image}
              className="object-cover w-full h-screen"
              alt="Home Page Banner"
              width={3024}
              height={1502}
            />
          </div>
        ))}
      </div>

      <div className="absolute top-0 flex flex-col items-center justify-center w-full h-full px-4 text-left">
        <div className="flex flex-col items-start justify-center">
          <Heading
            level="h1"
            className="text-4xl font-bold leading-10 text-white"
          >
            PAHADI STREET
          </Heading>

          <Heading
            level="h2"
            className="py-4 text-2xl font-normal leading-10 text-white"
          >
            EMBRACE FRESHNESS AND PURITY OF THE HILLS
          </Heading>

          <Link href="/store">
            <Button variant="secondary">Order Online</Button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Hero
