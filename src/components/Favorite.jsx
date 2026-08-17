import AspectRatioSquare from "@/components/atoms/AspectRatio";

export default function OurFavorite() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-normal sm:text-3xl md:text-5xl leading-tight">
        Our Favourite
        <br />
        Collection
      </h1>
      <p className="mt-4 text-lg md:text-xl text-gray-500 max-w-xl">
        We are inspired by the realities of life today, in which traditional
        divides between personal and professional space are more fluid.
      </p>

      {/* Favorite items will be rendered here */}
      <div className="flex flex-wrap justify-center gap-4 mt-8">
        <div>
          <AspectRatioSquare />
        </div>
      </div>
    </div>
  );
}
