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
    <section className="relative overflow-hidden rounded-t-[50px] bg-black py-16 text-white sm:py-20">
      {/* blobs */}
      <Image
        src="/images/blob-1.png"
        alt=""
        width={300}
        height={300}
        className="absolute left-0 top-20 hidden opacity-70 sm:block"
      />

      <Image
        src="/images/blob-1.png"
        alt=""
        width={120}
        height={120}
        className="absolute left-1/2 top-10 -translate-x-1/2 opacity-60"
      />

      <Image
        src="/images/blob-1.png"
        alt=""
        width={350}
        height={350}
        className="absolute bottom-10 right-0 hidden opacity-70 sm:block"
      />

      <div className="relative mx-auto max-w-6xl px-4">
        {/* header */}
        <div className="mb-10 flex flex-col justify-between gap-4 sm:mb-12 sm:flex-row">
          <h2 className="text-2xl font-semibold sm:text-4xl">
            My <span className="text-orange-500">Services</span>
          </h2>

          <p className="max-w-sm text-xs text-gray-400 sm:text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
            lacus nunc, posuere in justo vulputate, bibendum sodales.
          </p>
        </div>

        {/* slider */}
        <div className="flex gap-4 overflow-hidden sm:gap-6">
          {services.map((service, i) => (
            <div
              key={i}
              className={`min-w-[240px] transform transition-all duration-500 sm:min-w-[300px] ${
                i === index ? "scale-105" : "scale-95 opacity-50"
              }`}
            >
              <div className="rounded-3xl bg-white/10 p-3 backdrop-blur-lg transition hover:scale-105 hover:shadow-xl sm:p-4">
                <h3 className="mb-3 text-sm sm:mb-4 sm:text-lg">
                  {service.title}
                </h3>
                <div className="relative h-44 overflow-visible rounded-2xl bg-white sm:h-56">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover rounded-2xl"
                  />

                  {/* Arrow */}
                  <button
                    aria-label={`Open ${service.title}`}
                    className="absolute 
                      -bottom-4 -right-4   
                      h-12 w-12          
                      rounded-full 
                      bg-[#0f172a]       
                      text-white text-lg
                      flex items-center justify-center
                      shadow-xl
                      transition-all duration-300
                      hover:scale-110"
                  >
                    ↗
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* dots */}
        <div className="mt-6 flex justify-center gap-2">
          {services.map((_, i) => (
            <div
              key={i}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === index ? "w-6 bg-orange-500" : "w-2 bg-gray-500"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
