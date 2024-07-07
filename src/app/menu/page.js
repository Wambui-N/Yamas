export default function Menu() {
  return (
    <main>
      <div className="bg-[url('/Hero.png')] bg-cover bg-no-repeat bg-bottom rounded-xl w-full h-full ">
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
    </main>
  );
}
