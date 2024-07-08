import Image from "next/image";

export default function Gallery() {
  return (
    <main className="h-full">
      <div className="w-full p-[2rem] rounded-xl">
        <Image className='rounded-xl' src={"/contact.jpg"} alt="alt" width={500} height={500} />
      </div>
    </main>
  );
}
