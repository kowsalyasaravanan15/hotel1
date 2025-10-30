import Image from "next/image";

export default function FoodGallery() {
  return (
    <section className="w-100% bg-white py-8 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* Row 1
        <div className="col-span-2 row-span-1">
          <Image
            src="/v1.png"
            alt="Gourmet dish"
            width={200}
            height={50}
            className="rounded-2xl object-cover w-full h-full"
            />
      </div>

        <div className="col-span-1 row-span-1">
          <Image
            src="/v3.jpg"
            alt="Pasta with wine"
            width={100}
            height={50}
            className="rounded-2xl object-cover w-full h-full"
          />
        </div> */}

        {/* Row 3 */}
        <div className="col-span-1 row-span-1">
          <Image
            src="/v2.png"
            alt="Creamy pasta dish"
            width={100}
            height={50}
            className="rounded-2xl object-cover w-full h-full"
          />
        </div>

        <div className="col-span-2 row-span-1">
          <Image
            src="/v1.png"
            alt="Gourmet dish"
            width={200}
            height={50}
            className="rounded-2xl object-cover w-full h-full"
            />
      </div>
      </div>
    </section>
  );
}
