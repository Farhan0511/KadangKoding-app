export default function TestimonialsCard() {
  const testimonials = [
    {
      name: "Rizky Pratama",
      role: "Customer",
      message:
        "The quality is honestly better than I expected. The material feels premium, comfortable, and the design is simple but stylish.",
    },
    {
      name: "Alya Putri",
      role: "Customer",
      message:
        "I really love the overall design. Everything looks clean, modern, and easy to wear. Definitely one of my favorite purchases.",
    },
    {
      name: "Kevin Wijaya",
      role: "Customer",
      message:
        "The product arrived quickly and was exactly as described. The quality and attention to detail really impressed me.",
    },
    {
      name: "Nadia Salsabila",
      role: "Customer",
      message:
        "KadangKoding has a really nice collection. The style feels modern without being too complicated, and the quality is great.",
    },
    {
      name: "Fajar Ramadhan",
      role: "Customer",
      message:
        "This is my second purchase and I am still impressed. The products are comfortable, well made, and worth the price.",
    },
    {
      name: "Dinda Maharani",
      role: "Customer",
      message:
        "I had a great shopping experience from start to finish. The product looks even better in person and feels very comfortable.",
    },
  ];

  return (
    <section className="w-full px-6 py-24 md:px-12 lg:py-32">
      <div className="mx-auto w-full max-w-6xl">

        <div className="grid w-full grid-cols-1 gap-x-20 gap-y-15 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="border-b border-gray-200 pb-8">
              <p className="text-base leading-7 text-gray-700">
                “{testimonial.message}”
              </p>

              <div className="mt-6">
                <h2 className="font-semibold text-black">{testimonial.name}</h2>

                <p className="mt-1 text-sm text-gray-500">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
