"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const services = [
  { title: "UI / UX Design", image: "/images/service-1.webp" },
  { title: "Web Design", image: "/images/service-2.webp" },
  { title: "Landing Page", image: "/images/service-3.webp" },
];

export default function ServicesSection() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % services.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative overflow-hidden rounded-t-[50px] bg-black py-16 sm:py-20 text-white">

      <Image src="/images/blob-1.png" alt="" width={300} height={300}
        className="absolute left-0 top-20 opacity-70 hidden sm:block" />

      <Image src="/images/blob-1.png" alt="" width={120} height={120}
        className="absolute left-1/2 top-10 -translate-x-1/2 opacity-60" />

      <Image src="/images/blob-1.png" alt="" width={350} height={350}
        className="absolute right-0 bottom-10 opacity-70 hidden sm:block" />

      <div className="relative mx-auto max-w-6xl px-4">

        {/* header */}
        <div className="mb-10 sm:mb-12 flex flex-col sm:flex-row justify-between gap-4">
          <h2 className="text-2xl sm:text-4xl font-semibold">
            My <span className="text-orange-500">Services</span>
          </h2>
          <p className="max-w-sm text-xs sm:text-sm text-gray-400">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
            lacus nunc, posuere in justo vulputate, bibendum sodales
          </p>
        </div>

        {/* Slider */}
        <div className="flex gap-4 sm:gap-6 overflow-hidden">
          {services.map((service, i) => (
            <div
              key={i}
              className={`min-w-[240px] sm:min-w-[300px] transform transition-all duration-500 ${
                i === index ? "scale-105" : "scale-95 opacity-50"
              }`}
            >
              <div className="rounded-3xl bg-white/10 p-3 sm:p-4 backdrop-blur-lg hover:scale-105 hover:shadow-xl transition">

                <h3 className="mb-3 sm:mb-4 text-sm sm:text-lg">{service.title}</h3>

                <div className="relative h-44 sm:h-56 rounded-2xl overflow-hidden bg-white">
                  <Image src={service.image} alt="" fill className="object-cover"/>
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* dots */}
        <div className="mt-5 sm:mt-6 flex justify-center gap-2">
          {services.map((_, i) => (
            <div
              key={i}
              className={`h-2 rounded-full ${
                i === index ? "bg-orange-500 w-6" : "bg-gray-500 w-2"
              }`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}