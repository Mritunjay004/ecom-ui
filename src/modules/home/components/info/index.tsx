import Image from "next/image"

const Info = () => {
  return (
    <div className="bg-[#FBF9F3] flex flex-col items-center justify-around py-12 px-4 sm:px-0  md:flex-row">
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
        <Image src="/hut.png" alt="Hut" width={500} height={500} />
      </div>
    </div>
  )
}

export default Info
