import Link from "next/link";

export default function page() {
  return (
    <main className="h-full grid lg:grid-cols-7 lg:grid-rows-1 grid-cols-1 md:grid-rows-7 grid-row-5 gap-[1rem]">
      <div className="bg-[url('/home.jpg')] bg-cover bg-no-repeat bg-center rounded-xl lg:col-span-5 lg:row-span-1 md:row-span-5 row-span-2 h-full">
        <div className="w-full text-white bg-black/20 p-[2rem] h-full flex flex-col justify-end rounded-xl">
          <div>
            <h1
              className="uppercase lg:text-[10rem] md:text-7xl text-4xl leading-none"
              style={{ fontFamily: "myFont" }}
            >
              Yamas
            </h1>
            <p
              className="uppercase lg:text-6xl md:text-4xl text-2xl"
              style={{ fontFamily: "myFont" }}
            >
              Sip, Savor, Celebrate.
            </p>
          </div>
        </div>
      </div>
      <div className="h-full lg:col-span-2 lg:row-span-1 md:row-span-2 row-span-3 flex lg:flex-col md:flex-row flex-col gap-4">
        <div className="relative bg-[url('/menu_drink.jpg')] bg-cover bg-center rounded-xl w-full h-full flex items-end justify-end">
          <svg
            width="25"
            height="25"
            viewBox="0 0 25 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M25.25 26.25H4.40914C8.02024 25.5326 12.1864 23.983 15.876 21.1867C20.249 17.8725 23.9419 12.8142 25.25 5.34475V26.25Z"
              fill="#ffffd1"
              stroke="#ffffd1"
              stroke-width="0"
              stroke-linejoin="round"
            />
          </svg>
          <svg
            className="absolute bottom-[36px]"
            width="25"
            height="25"
            viewBox="0 0 25 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M25.25 26.25H4.40914C8.02024 25.5326 12.1864 23.983 15.876 21.1867C20.249 17.8725 23.9419 12.8142 25.25 5.34475V26.25Z"
              fill="#ffffd1"
              stroke="#ffffd1"
              stroke-width="0"
              stroke-linejoin="round"
            />
          </svg>
          <Link
            href="/menu"
            className="bg-white text-primary px-6 py-2 rounded-tl-2xl uppercase text-sm"
          >
            <p className="tracking-wide font-semibold">
              Menu <span className="w-2 h-2">&#129122;</span>
            </p>
          </Link>
        </div>
        <div className="relative bg-[url('/reserved.jpg')] bg-cover bg-center rounded-xl w-full h-full flex items-end justify-end">
          <svg
            width="25"
            height="25"
            viewBox="0 0 25 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M25.25 26.25H4.40914C8.02024 25.5326 12.1864 23.983 15.876 21.1867C20.249 17.8725 23.9419 12.8142 25.25 5.34475V26.25Z"
              fill="#ffffd1"
              stroke="#ffffd1"
              stroke-width="0"
              stroke-linejoin="round"
            />
          </svg>
          <svg
            className="absolute bottom-[36px]"
            width="25"
            height="25"
            viewBox="0 0 25 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M25.25 26.25H4.40914C8.02024 25.5326 12.1864 23.983 15.876 21.1867C20.249 17.8725 23.9419 12.8142 25.25 5.34475V26.25Z"
              fill="#ffffd1"
              stroke="#ffffd1"
              stroke-width="0"
              stroke-linejoin="round"
            />
          </svg>
          <Link
            href="/reservation"
            className="bg-white text-primary px-6 py-2 rounded-tl-2xl uppercase text-sm"
          >
            <p className="tracking-wide font-semibold">
              Reservation <span className="w-2 h-2">&#129122;</span>
            </p>
          </Link>
        </div>
        <div className="relative bg-[url('/Gift_Card.png')] bg-cover bg-center rounded-xl w-full h-full flex items-end justify-end">
          <svg
            width="25"
            height="25"
            viewBox="0 0 25 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M25.25 26.25H4.40914C8.02024 25.5326 12.1864 23.983 15.876 21.1867C20.249 17.8725 23.9419 12.8142 25.25 5.34475V26.25Z"
              fill="#ffffd1"
              stroke="#ffffd1"
              stroke-width="0"
              stroke-linejoin="round"
            />
          </svg>
          <svg
            className="absolute bottom-[36px]"
            width="25"
            height="25"
            viewBox="0 0 25 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M25.25 26.25H4.40914C8.02024 25.5326 12.1864 23.983 15.876 21.1867C20.249 17.8725 23.9419 12.8142 25.25 5.34475V26.25Z"
              fill="#ffffd1"
              stroke="#ffffd1"
              stroke-width="0"
              stroke-linejoin="round"
            />
          </svg>
          <Link
            href="/contact"
            className="bg-white text-primary px-6 py-2 rounded-tl-2xl uppercase text-sm"
          >
            <p className="tracking-wide font-semibold">
              Contact <span className="w-2 h-2">&#129122;</span>
            </p>
          </Link>
        </div>
      </div>
    </main>
  );
}
