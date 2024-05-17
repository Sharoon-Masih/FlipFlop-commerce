import Hero from "@/components/main-component/hero";
import Newest from "@/components/main-component/newest";

// import { revalidatePath } from 'next/cache'

// revalidatePath("/","page")

export const dynamic="force-dynamic"


export default function Home() {
  return (
    <main className="bg-white ">
      <Hero/>
      <Newest/>
    </main>
       
  );
}
