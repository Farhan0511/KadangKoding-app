export default function Footer() {
  return (
    <footer className="bg-neutral-900 pt-8 text-white">
      <div className="container mx-auto px-4">
        {/* Logo & Navigation */}
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          {/* Logo */}
          <div>
            <a href="#" className="inline-block">
              <span className="flex flex-col text-xs font-bold uppercase leading-tight">
                <span style={{ letterSpacing: ".12rem" }}>Kadang</span>
                <span>Koding</span>
              </span>
            </a>
          </div>

          {/* Navigation */}
          <div>
            <ul className="flex flex-col gap-4 md:flex-row">
              <li>
                <a
                  href="#"
                  className="text-neutral-300 transition hover:text-white"
                >
                  Home
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="text-neutral-300 transition hover:text-white"
                >
                  Services
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="text-neutral-300 transition hover:text-white"
                >
                  Products
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="text-neutral-300 transition hover:text-white"
                >
                  About Us
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="text-neutral-300 transition hover:text-white"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Heading & Social Media */}
        <div className="flex flex-col gap-8 py-16 md:flex-row md:items-center md:justify-between">
          <div className="md:max-w-xl">
            <h2 className="text-4xl font-bold md:text-5xl">
              We Design all over the world
            </h2>
          </div>

        </div>

        {/* Email & Contact */}
        <div className="flex flex-col gap-8 py-8 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-col">
            <span className="text-sm text-neutral-400">Email Id</span>
            <span className="text-2xl font-light">KadangKoding@gmail.com</span>
          </div>

          <div>
            <a
              href="#"
              className="inline-block rounded-md border border-white px-5 py-2 transition hover:bg-white hover:text-black"
            >
              Contact us
            </a>
          </div>
        </div>

        {/* Divider */}
        <hr className="border-neutral-700" />

        {/* Copyright */}
        <div className="flex flex-col gap-4 py-6 text-sm text-neutral-400 md:flex-row md:items-center md:justify-between">
          <p className="mb-0 text-center md:text-left">
            &copy; 2025 KadangKoding. Developed by{" "}
            <a
              href="https://codescandy.com"
              target="_blank"
              rel="noreferrer"
              className="text-white hover:underline"
            >
              FarhanDev
            </a>{" "}
            • Distributed by{" "}
            <a
              href="https://themewagon.com"
              target="_blank"
              rel="noreferrer"
              className="text-white hover:underline"
            >
              ThemeWagon
            </a>
            . All rights reserved.
          </p>

          <div className="flex justify-center gap-4 md:justify-end">
            <a href="#" className="hover:text-white">
              Privacy Policy
            </a>

            <a href="#" className="hover:text-white">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
