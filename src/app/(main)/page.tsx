import { getCollectionsList } from "@lib/data"
import FeaturedProducts from "@modules/home/components/featured-products"
import Hero from "@modules/home/components/hero"
import SkeletonHomepageProducts from "@modules/skeletons/components/skeleton-homepage-products"
import { Metadata } from "next"
import Image from "next/image"
import { Suspense } from "react"

export const metadata: Metadata = {
  title: "Pahadi Street",
  description:
    "Pahadi Street is a sustainable Pahadi Street - Your Gateway to Authentic Jammu and kashmir products now delivered to your doorstep brand that makes clothes from upcycled waste fabric.",
}

export default async function Home() {
  const { collections, count } = await getCollectionsList(0, 3)

  return (
    <>
      <Hero />
      <Info />
      <Suspense fallback={<SkeletonHomepageProducts count={count} />}>
        <FeaturedProducts collections={collections} />
      </Suspense>
    </>
  )
}

const Info = () => {
  return (
    <div className="bg-[#FBF9F3] flex flex-col items-center justify-between mt-12 content-container md:flex-row ">
      <div className="w-full md:w-[40%]">
        <h2 className="mb-2 text-2xl font-bold">
          Pahadi Street - Your Gateway to Authentic Jammu and Kashmir products
          now delivered to your doorstep
        </h2>

        <hr className="w-16 border-gray-600 " />

        <h3 className="my-4 text-gray-600">From Our Land to Your Kitchen</h3>
        <p className="text-gray-600">
          Pahadi Street is thrilled to introduce our new online venture,
          bringing the soulful and authentic raw food items of Jammu to the
          doorsteps of food enthusiasts across the country. At Pahadi Street, we
          understand the importance of quality ingredients in creating a truly
          authentic culinary experience. That&apos;s why we source the finest
          raw materials directly from the heart of Jammu and Kashmir, ensuring
          that each product reflects the rich agricultural heritage of the
          region. From aromatic spices to indigenous grains, our selection
          allows you to recreate the magic of Jammu&apos;s cuisine in your own
          kitchen.
        </p>
      </div>

      {/* image */}
      <div className="w-full md:w-[40%]">
        <Image
          src="/hut.png"
          alt="Hut"
          width={400}
          height={400}
          className="bg-[#FBF9F3] object-cover rounded-lg"
        />
      </div>
    </div>
  )
}
