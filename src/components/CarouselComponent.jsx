import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import GludukPutih from "../assets/GludukPutih.png";
import CargoBack from "../assets/CargoBack.png";

export default function CarouselComponent() {
  return (
    <div className="flex items-center justify-center w-full min-h-screen">
      <Carousel className="w-full max-w-xl">
        <CarouselContent>
          <CarouselItem>
            <img
              src={GludukPutih}
              alt="gluduk-putih"
              className="w-full rounded-lg"
            />
          </CarouselItem>

          <CarouselItem>
            <img
              src={CargoBack}
              alt="cargo-back"
              className="w-full rounded-lg"
            />
          </CarouselItem>

          <CarouselItem>
            <img
              src={GludukPutih}
              alt="gluduk-putih"
              className="w-full rounded-lg"
            />
          </CarouselItem>
        </CarouselContent>

        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}
