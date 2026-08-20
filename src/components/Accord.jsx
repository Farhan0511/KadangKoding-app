import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function AccordionDemo() {
  return (
    <section className="w-full bg-white py-24 px-6">
      <div className="mx-auto w-full max-w-5xl">
        {/* Heading */}
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-black md:text-4xl">
            Frequently Asked Questions
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-gray-600">
            Find answers to the most common questions about KadangKoding,
            our products, orders, and services.
          </p>
        </div>

        {/* FAQ */}
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="products">
            <AccordionTrigger className="py-6 text-left text-lg font-semibold text-black hover:no-underline">
              What products does KadangKoding offer?
            </AccordionTrigger>

            <AccordionContent className="pb-6 text-base leading-7 text-gray-600">
              KadangKoding offers modern and comfortable clothing designed for
              everyday wear. Browse our collection to find pieces that fit
              your personal style.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="shipping">
            <AccordionTrigger className="py-6 text-left text-lg font-semibold text-black hover:no-underline">
              What are your shipping options?
            </AccordionTrigger>

            <AccordionContent className="pb-6 text-base leading-7 text-gray-600">
              We offer standard, express, and overnight shipping depending on
              your location. Delivery times may vary based on the destination.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="returns">
            <AccordionTrigger className="py-6 text-left text-lg font-semibold text-black hover:no-underline">
              What is your return policy?
            </AccordionTrigger>

            <AccordionContent className="pb-6 text-base leading-7 text-gray-600">
              We accept returns within 30 days of purchase. Items must be
              unused and returned in their original condition and packaging.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="order">
            <AccordionTrigger className="py-6 text-left text-lg font-semibold text-black hover:no-underline">
              How can I track my order?
            </AccordionTrigger>

            <AccordionContent className="pb-6 text-base leading-7 text-gray-600">
              Once your order has been shipped, you will receive tracking
              information so you can easily follow your package.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="support">
            <AccordionTrigger className="py-6 text-left text-lg font-semibold text-black hover:no-underline">
              How can I contact customer support?
            </AccordionTrigger>

            <AccordionContent className="pb-6 text-base leading-7 text-gray-600">
              You can contact our team through the Contact page. We are happy
              to help with questions about products, orders, or anything else.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
}