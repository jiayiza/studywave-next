import { auth } from "@/auth";
import { Footer } from "@/components/ui/footer";
import { Navbar } from "@/components/ui/navbar";

export default async function Home() {
  const session = await auth();

  return (
    <div className="min-h-[200vh]">
      <Navbar />

      <pre className="mt-20">{JSON.stringify(session, null, 2)}</pre>

      <Footer />
    </div>
  );
}
