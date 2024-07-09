import Link from "next/link";

export default function page() {
  return (
    <main className="h-full grid lg:grid-cols-7 lg:grid-rows-1 grid-cols-1 md:grid-rows-7 grid-row-5 gap-[1rem]">
      <div className="bg-[url('/Hero.png')] bg-cover bg-no-repeat bg-bottom rounded-xl lg:col-span-5 md:row-span-5 row-span-2 h-full">
        <div className="w-full bg-black/30 p-[2rem] h-full flex flex-col justify-end rounded-xl">
          <div>
            <h1
              className="uppercase lg:text-9xl md:text-7xl text-4xl leading-none"
              style={{ fontFamily: "myFont" }}
            >
              Yamas
            </h1>
            <p className="uppercase lg:text-5xl md:text-4xl text-2xl" style={{ fontFamily: "myFont" }}>
              Sip, Savor, Celebrate.
            </p>
          </div>
        </div>
      </div>
      <div className="h-full lg:col-span-2 md:row-span-2 row-span-3 flex lg:flex-col md:flex-row flex-col gap-4">
        <div className="bg-[url('/Menu.png')] bg-cover bg-center rounded-xl w-full h-full flex items-end justify-end">
          <Link href="/menu" className="bg-black px-6 py-2 rounded-tl-lg uppercase text-sm">
            <p>
              Menu <span className="w-2 h-2">&#129122;</span>
            </p>
          </Link>
        </div>
        <div className="bg-[url('/Reservation.png')] bg-cover bg-center rounded-xl w-full h-full flex items-end justify-end">
          <Link href="/reservation" className="bg-black px-6 py-2 rounded-tl-lg uppercase text-sm">
            <p>
              Reservation <span className="w-2 h-2">&#129122;</span>
            </p>
          </Link>
        </div>
        <div className="bg-[url('/Gift_Card.png')] bg-cover bg-center rounded-xl w-full h-full flex items-end justify-end">
          <Link href="/contact" className="bg-black px-6 py-2 rounded-tl-lg uppercase text-sm">
            <p>
              Contact <span className="w-2 h-2">&#129122;</span>
            </p>
          </Link>
        </div>
      </div>
    </main>
  );
}
