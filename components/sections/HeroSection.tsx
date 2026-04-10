import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative mx-auto max-w-6xl px-4 sm:px-6 py-16 sm:py-20 text-center overflow-hidden">

      {/* Hello text */}
      <div className="relative inline-block mb-4 sm:mb-6">
        <p className="rounded-full border border-gray-300 px-4 sm:px-5 py-1.5 sm:py-2 text-xs sm:text-sm">
          Hello!
        </p>

        <span className="absolute -right-4 -top-2 h-3 w-1 bg-orange-400 rotate-45 rounded-full"></span>
        <span className="absolute -right-2 -top-3 h-3 w-1 bg-orange-300 rotate-12 rounded-full"></span>
        <span className="absolute -right-1 -top-1 h-2 w-1 bg-orange-200 rotate-75 rounded-full"></span>
      </div>

      {/* title */}
      <h1 className="text-3xl sm:text-5xl md:text-[64px] font-semibold leading-[1.1]">
        I&apos;m <span className="text-orange-500">Jenny</span>, <br />
        Product Designer
      </h1>

      {/* Left text */}
      <div className="absolute left-2 sm:left-0 top-1/2 hidden -translate-y-1/2 text-left md:block">
        <p className="text-3xl sm:text-4xl text-gray-400">“</p>
        <p className="max-w-[180px] sm:max-w-xs text-xs sm:text-sm text-gray-600">
          Jenny's exceptional product design ensures our website's success.
          Highly recommended.
        </p>
      </div>

      {/* right text */}
      <div className="absolute right-2 sm:right-0 top-1/2 hidden -translate-y-1/2 text-right md:block">
        <p className="text-orange-500 text-sm sm:text-base">★★★★★</p>
        <h3 className="text-xl sm:text-2xl font-semibold">10 Years</h3>
        <p className="text-xs sm:text-sm text-gray-500">Experience</p>
      </div>

      {/* Image container */}
      <div className="relative mx-auto mt-10 sm:mt-12 w-[90%] sm:w-[420px] h-[380px] sm:h-[520px]">

        {/* semicircle */}
        <div className="absolute bottom-0 left-1/2 
          w-[320px] sm:w-[520px] h-[700px] sm:h-[240px] 
          -translate-x-1/2 
          rounded-t-full 
          bg-orange-400 z-0"
        />

        {/* image */}
        <Image
          src="/images/hero.webp"
          alt="hero"
          fill
          className="object-contain z-10"
        />

        {/* buttons */}
        <div className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 z-20">
          <div className="flex items-center gap-2 rounded-full bg-white/20 p-2 backdrop-blur-md">

            <button className="rounded-full bg-orange-500 px-4 sm:px-5 py-1.5 sm:py-2 text-xs sm:text-sm text-white font-medium">
              Portfolio ↗
            </button>

            <button className="px-4 sm:px-5 py-1.5 sm:py-2 text-xs sm:text-sm text-gray-200 font-medium">
              Hire me
            </button>

          </div>
        </div>

      </div>
    </section>
  );
}