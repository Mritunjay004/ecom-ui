import { Button, Heading } from "@medusajs/ui"
import Image from "next/image"
import Link from "next/link"

const Hero = () => {
  return (
    <div className="relative h-[75vh] w-full border-b border-ui-border-base">
      <Image
        src="https://static.wixstatic.com/media/ad420a_49acd0b6db4e4e58a2f753c9abcb2e10~mv2_d_3818_2546_s_4_2.jpg/v1/fill/w_1960,h_1502,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/ad420a_49acd0b6db4e4e58a2f753c9abcb2e10~mv2_d_3818_2546_s_4_2.jpg"
        fill
        className="object-cover"
        quality={100}
        alt="Background Image"
      />
      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-6 text-center small:p-32">
        <span>
          <Heading
            level="h1"
            className="text-3xl font-bold leading-10 text-white"
          >
            PAHADI STREET
          </Heading>
          <Heading
            level="h2"
            className="text-3xl font-normal leading-10 text-white"
          >
            EMBRACE FRESHNESS AND PURITY OF THE HILLS
          </Heading>
        </span>

        <Link href="/store">
          <Button variant="secondary">Order Online</Button>
        </Link>
      </div>
    </div>
  )
}

export default Hero
