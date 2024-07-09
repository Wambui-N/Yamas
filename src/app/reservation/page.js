import { Form } from "@/Components";

export default function Reservation() {
  return (
    <main className="min-h-[90vh] grid md:grid-cols-5 grid-cols-1 grid-rows-2 md:grid-rows-1 gap-8">
      <div className="md:col-span-3 row-span-1 h-full bg-[url('/Reserve.png')] bg-cover bg-no-repeat bg-bottom rounded-xl">
        <div className="w-full bg-black/40 p-[2rem] h-full flex flex-col justify-end rounded-xl">
          <p style={{ fontFamily: "myFont" }} className="lg:text-5xl md:text-3xl text-xl uppercase">
            Reserve your spot for an unforgettable dining experience.
          </p>
        </div>
      </div>
      <div className="md:col-span-2 row-span-1">
        <div className="w-full h-full flex justify-center">
          <div className="flex flex-col w-full lg:px-20 md:px-8 px-2 justify-center gap-12">
            <h1
              style={{ fontFamily: "myFont" }}
              className="uppercase tracking-wide text-4xl text-center"
            >
              Reservation
            </h1>
            <Form />
          </div>
        </div>
      </div>
    </main>
  );
}
