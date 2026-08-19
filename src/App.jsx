import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Favorite from "./components/atoms/Favorite";
import Quotes from "./components/atoms/Quotes";
import Subscribe from "./components/atoms/Subscribe";

export default function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1">
        <Hero />

        <Favorite />

        <Quotes />

        <Subscribe />
      </main>
      <Footer />
    </div>
  );
}
