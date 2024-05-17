import Hero from "@/components/main-component/hero";
import Newest from "@/components/main-component/newest";
import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-white ">
      <Hero/>
      <Newest/>
    </main>
       
  );
}
