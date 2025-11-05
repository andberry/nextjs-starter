import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-white font-sans">
      <main>
        <Image
          src="/next.svg"
          alt="Next.js logo"
          width={100}
          height={20}
          priority
        />
        <div>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim dolore, architecto optio repellat recusandae exercitationem ratione libero temporibus ducimus fugit non, blanditiis illum hic, placeat cupiditate laudantium voluptatum deserunt eos.
        </div>
        
      </main>
    </div>
  );
}
