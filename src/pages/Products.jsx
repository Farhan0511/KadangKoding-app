import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ListProducts from "@/components/atoms/ListProduct";

export default function Products() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <div className="flex flex-1 flex-col items-center justify-start px-6 pt-16 text-center md:px-24 md:pt-20">
        <h1 className="text-4xl font-bold">Products List</h1>
        <p className="mt-4 max-w-2xl text-base sm:text-lg">
          Explore our collection of products, carefully selected to offer
          quality, comfort, and style for your everyday needs.
        </p>
      </div>

      <ListProducts />

      <Footer />
    </div>
  );
}
