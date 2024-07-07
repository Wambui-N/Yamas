import Link from "next/link";

export default function page() {
  return (
    <main className="h-full grid grid-cols-7 gap-[1rem]">
      <div className="bg-[url('/Hero.png')] bg-cover bg-no-repeat bg-bottom rounded-xl col-span-5 h-full">
        <div className="w-full bg-black/20 p-[2rem] h-full flex flex-col justify-between rounded-xl">
          <div>Menu</div>
          <div>
            <h1
              className="font-fog uppercase text-[150px] leading-none"
              style={{ fontFamily: "myFont" }}
            >
              Yamas
            </h1>
            <p className="uppercase text-5xl" style={{ fontFamily: "myFont" }}>
              Sip, Savor, Celebrate.
            </p>
          </div>
        </div>
      </div>
      <div className="col-span-2 grid grid-rows-3 gap-4">
        <div className="bg-[url('/Menu.png')] bg-cover bg-center rounded-xl w-full h-full flex items-end justify-end">
          <Link href="/menu" className="bg-black px-6 py-2 rounded-tl-lg">
            <p>
              Menu <span className="w-2 h-2">&#129122;</span>
            </p>
          </Link>
        </div>
        <div className="bg-[url('/Reservation.png')] bg-cover bg-center rounded-xl w-full h-full flex items-end justify-end">
          <Link href="/reservation" className="bg-black px-6 py-2 rounded-tl-lg">
            <p>
              Reservation <span className="w-2 h-2">&#129122;</span>
            </p>
          </Link>
        </div>
        <div className="bg-[url('/Gallery.png')] bg-cover bg-center rounded-xl w-full h-full flex items-end justify-end">
          <Link href="/gallery" className="bg-black px-6 py-2 rounded-tl-lg">
            <p>
              Gallery <span className="w-2 h-2">&#129122;</span>
            </p>
          </Link>
        </div>
      </div>
    </main>
  );
}
