import { getCollectionsList } from "@lib/data"
import FeaturedProducts from "@modules/home/components/featured-products"
import Hero from "@modules/home/components/hero"
import Info from "@modules/home/components/info"
import SkeletonHomepageProducts from "@modules/skeletons/components/skeleton-homepage-products"
import { Metadata } from "next"
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
