import { Form } from "@/Components";

export default function Reservation() {
  return (
    <main className="grid grid-cols-5 gap-8">
      <div className="col-span-3 h-[80vh] bg-[url('/Reserve.png')] bg-cover bg-no-repeat bg-bottom rounded-xl">
        <div className="w-full bg-black/40 p-[2rem] h-full flex flex-col justify-end rounded-xl">
          <p style={{ fontFamily: "myFont" }} className="text-5xl uppercase">
            Reserve your spot for an unforgettable dining experience.
          </p>
        </div>
      </div>
      <div className="col-span-2">
        <div className="w-full h-full flex justify-center">
          <div className="flex flex-col w-full px-20 justify-center gap-12">
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
