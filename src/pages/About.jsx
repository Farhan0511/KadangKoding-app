import AboutPages from "@/components/atoms/AboutPages";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function About() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      <main className="flex flex-1 flex-col items-center justify-start px-6 pt-16 text-center md:px-24 md:pt-20">
        <h1 className="text-4xl font-bold">About Our Store</h1>

        <p className="mt-4 max-w-2xl text-base sm:text-lg">
          Modern clothing designed for everyday comfort and effortless style.
          Explore the collection and find pieces that fit your everyday look at
          KadangKoding.
        </p>
      </main>

      <AboutPages/>

      <Footer />
    </div>
  );
}
