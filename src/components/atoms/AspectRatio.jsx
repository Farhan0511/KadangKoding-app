import * as React from "react";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";

import street from "@/assets/streetwear.jpg";
import liberti from "@/assets/liberti.jpg";
import harley from "@/assets/harley-queen.jpg";

const furnitureItems = [
  {
    id: 1,
    name: "Streetwear Harley-Queen",
    image: street,
    originalPrice: 59.0,
    salePrice: 29.0,
  },
  {
    id: 2,
    name: "Liberti Streetwear",
    image: liberti,
    originalPrice: 95.0,
    salePrice: 89.0,
  },
  {
    id: 3,
    name: "High Back Boss Chair",
    image: harley,
    originalPrice: 78.0,
    salePrice: 68.0,
  },
];

export default function ProductCarousel() {
  const [api, setApi] = React.useState();
  const [current, setCurrent] = React.useState(0);

  React.useEffect(() => {
    if (!api) return;

    const handleSelect = () => {
      setCurrent(api.selectedScrollSnap());
    };

    api.on("select", handleSelect);

    return () => {
      api.off("select", handleSelect);
    };
  }, [api]);

  return (
    <div className="w-full">
      <Carousel setApi={setApi} className="w-full">
        <CarouselContent>
          {furnitureItems.map((item) => (
            <CarouselItem
              key={item.id}
              className="basis-full sm:basis-1/2 lg:basis-1/3"
            >
              <div className="rounded-lg bg-muted p-4">
                <AspectRatio
                  ratio={1 / 1}
                  className="overflow-hidden rounded-lg bg-muted"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-full w-full object-contain"
                  />
                </AspectRatio>

                <div className="mt-4 text-center">
                  <h3 className="text-base font-medium">
                    {item.name}
                  </h3>

                  <p className="mt-1 text-sm">
                    <span className="mr-2 text-muted-foreground line-through">
                      ${item.originalPrice.toFixed(2)}
                    </span>

                    <span className="font-semibold">
                      ${item.salePrice.toFixed(2)}
                    </span>
                  </p>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      <div className="mt-4 flex justify-center gap-2">
        {furnitureItems.map((item, index) => (
          <button
            key={item.id}
            type="button"
            onClick={() => api?.scrollTo(index)}
            className={cn(
              "h-2 w-2 rounded-full transition-colors",
              index === current
                ? "bg-foreground"
                : "bg-muted-foreground/30"
            )}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}