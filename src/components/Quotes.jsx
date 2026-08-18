import bg from "../assets/background1.jpg";

export default function Quotes() {
  return (
    <section
      className="relative flex min-h-400px w-full items-center justify-center bg-cover bg-center px-6 py-16"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="absolute inset-0 bg-black/50" />

      <div className="relative z-10 w-full max-w-3xl bg-white/90  px-8 py-10 text-center shadow-xl backdrop-blur-sm md:px-14 md:py-12">
        <span className="block text-4xl font-serif leading-none text-neutral-300">
          &ldquo;
        </span>

        <p className="-mt-4 text-base italic leading-relaxed text-neutral-800 sm:text-lg md:text-xl">
          Fashion is the armor to survive the reality of everyday life. It is
          more than what we wear; it is a reflection of who we are, how we
          feel, and how we choose to present ourselves to the world. Every
          piece tells a story, every detail expresses character, and every
          style becomes a part of our journey. Dress with confidence, stay
          true to yourself, and let your style speak without saying a word.
        </p>

        <div className="mt-6 flex items-center justify-center gap-3">
          <span className="h-px w-8 bg-neutral-400" />
          <h2 className="text-lg font-semibold tracking-widest text-black md:text-xl">
            KADANGKODING
          </h2>
          <span className="h-px w-8 bg-neutral-400" />
        </div>

        <p className="mt-1 text-sm uppercase tracking-wide text-neutral-500 md:text-base">
          Fashion &amp; Lifestyle
        </p>
      </div>
    </section>
  );
}