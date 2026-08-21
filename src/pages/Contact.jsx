import { useState } from "react";
import { MapPin, Mail, Phone } from "lucide-react";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
    alert("Pesan berhasil dikirim!");

    setForm({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <div className="flex min-h-screen flex-col bg-gray-100">
      <Navbar />

      <main className="flex-1 px-6 py-16 md:px-20">
        {/* Header */}
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold text-gray-900">Contact Us</h1>
          <p className="mx-auto mt-4 max-w-2xl text-gray-600">
            Have questions or feedback? We'd love to hear from you!
          </p>
        </div>

        {/* Contact Card */}
        <div className="mx-auto grid max-w-6xl overflow-hidden rounded-lg border border-gray-200 bg-white md:grid-cols-3">
          {/* Left */}
          <div className="space-y-8 bg-gray-50 p-10">
            <div>
              <h2 className="mb-4 text-3xl font-bold text-gray-900">
                Get in Touch
              </h2>
              <p className="leading-7 text-gray-600">
                Whether you have a question about our products, need assistance,
                or just want to talk — we're here for you.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex gap-4">
                <MapPin className="mt-1 text-orange-500" size={20} />
                <div>
                  <p className="text-xs font-bold tracking-widest text-gray-500">
                    ADDRESS
                  </p>
                  <p className="text-gray-800">
                    Sempu Seroja, Kota Serang Banten
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <Mail className="mt-1 text-orange-500" size={20} />
                <div>
                  <p className="text-xs font-bold tracking-widest text-gray-500">
                    EMAIL
                  </p>
                  <p className="text-gray-800">kadangkoding@gmail.com</p>
                </div>
              </div>

              <div className="flex gap-4">
                <Phone className="mt-1 text-orange-500" size={20} />
                <div>
                  <p className="text-xs font-bold tracking-widest text-gray-500">
                    PHONE
                  </p>
                  <p className="text-gray-800">+62 812 3456 7890</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right */}
          <div className="p-10 md:col-span-2">
            <h2 className="mb-8 text-3xl font-bold text-gray-900">
              Send a Message
            </h2>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid gap-5 md:grid-cols-2">
                <div>
                  <label className="mb-2 block font-medium">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    className="w-full border border-gray-300 px-4 py-3 outline-none transition focus:border-orange-500"
                  />
                </div>

                <div>
                  <label className="mb-2 block font-medium">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    className="w-full border border-gray-300 px-4 py-3 outline-none transition focus:border-orange-500"
                  />
                </div>
              </div>

              <div>
                <label className="mb-2 block font-medium">Subject</label>
                <input
                  type="text"
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  placeholder="Subject"
                  className="w-full border border-gray-300 px-4 py-3 outline-none transition focus:border-orange-500"
                />
              </div>

              <div>
                <label className="mb-2 block font-medium">Message</label>
                <textarea
                  rows={6}
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Write your message here..."
                  className="w-full resize-none border border-gray-300 px-4 py-3 outline-none transition focus:border-orange-500"
                />
              </div>

              <div className="flex justify-end">
                <button
                  type="submit"
                  className="bg-black px-8 py-3 font-medium text-white transition hover:bg-orange-500"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </main>

      <Footer />
    </div>  
  );
}
