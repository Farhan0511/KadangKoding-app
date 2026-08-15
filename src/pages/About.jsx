import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function About() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex flex-1 flex-col items-center justify-center p-24">
        <h1 className="text-3xl font-bold underline">About Us</h1>
        <p className="mt-4 text-lg text-center">
          Welcome to KadangKoding! We are passionate about providing
          high-quality coding resources and tutorials to help developers of all
          levels improve their skills. Our mission is to make coding accessible
          and enjoyable for everyone.
        </p>
      </main>
      <Footer />
    </div>
  );
}
