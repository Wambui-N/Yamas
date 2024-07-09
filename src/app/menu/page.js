import { Menu_Section } from "@/Components";

export default function Menu() {
  return (
    <main className="h-full">
      <div className="h-[80vh] bg-[url('/Menu_Hero.png')] bg-cover bg-no-repeat bg-center rounded-xl">
        <div className="w-full bg-black/20 p-[2rem] h-full flex flex-col justify-end rounded-xl">
          <div>
            <h1
              className="uppercase lg:text-9xl md:text-7xl text-4xl leading-none"
              style={{ fontFamily: "myFont" }}
            >
              Menu
            </h1>
            <p className="md:text-lg text-base lg:w-[60vw] w-full">
              At Yamas, we celebrate the art of fine wines and crafted
              cocktails. Step into a world where every drink and dish is a
              masterpiece, curated to delight your senses.
            </p>
          </div>
        </div>
      </div>
      <div>
        <Menu_Section />
      </div>
    </main>
  );
}
