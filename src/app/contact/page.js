import Image from "next/image";

export default async function Gallery() {
  return (
    <main className="h-full grid grid-rows-2">
      <div className="bg-[url('/Gift_Card.png')] bg-cover bg-no-repeat bg-center rounded-xl"></div>
      <div className="p-2 h-full flex flex-col gap-4 justify-center items-center rounded-xl">
        <div
          style={{ fontFamily: "myFont" }}
          className="uppercase text-center text-xl text-primary tracking-wide flex flex-col justify-between gap-2"
        >
          <div className="">
            <p className="">+254 700 000 000</p>
            <p className="">yamas@gmail.com</p>
            <p className="">1 SOHO ST LDN W1D 3GT</p>
          </div>
          <h1
            className="font-fog uppercase lg:text-9xl md:text-7xl text-5xl leading-none"
            style={{ fontFamily: "myFont" }}
          >
            Yamas
          </h1>
        </div>
      </div>
    </main>
  );
}
