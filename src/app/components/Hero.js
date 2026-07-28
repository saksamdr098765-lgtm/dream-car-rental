"use client";

import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#F8F6F2] text-[#111111]">

      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#FFFDF8] via-[#F8F6F2] to-[#F2EEE8]" />

      {/* Yellow Ambient Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(245,180,0,.18),transparent_65%)]" />

      {/* Decorative Glow */}
      <div className="absolute -top-60 -left-60 h-[700px] w-[700px] rounded-full bg-yellow-400/10 blur-[150px]" />
      <div className="absolute -right-40 top-20 h-[500px] w-[500px] rounded-full bg-yellow-400/10 blur-[130px]" />


      {/* Background Text */}
      <h2 className="pointer-events-none absolute left-1/2 top-16 -translate-x-1/2 whitespace-nowrap select-none text-[26vw] font-black uppercase tracking-[-0.08em] text-black/[0.04] sm:text-[22vw] md:text-[18vw]">
        Dream Drive
      </h2>


      {/* Car */}
      <motion.div
        initial={{ opacity: 0, y: 80, scale: .97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 1 }}
        className="
          absolute
          left-1/2
          bottom-[280px]
          sm:bottom-[250px]
          md:bottom-[220px]
          lg:bottom-44
          -translate-x-1/2
          z-20
          w-[185%]
          sm:w-[165%]
          md:w-[135%]
          lg:w-[110%]
          xl:w-full
        "
      >

        <div className="absolute bottom-5 left-1/2 h-28 w-[70%] -translate-x-1/2 rounded-full bg-[#F5B400]/35 blur-[110px]" />

        <img
          src="/hero-car.jpg"
          alt="Luxury car rental"
          className="relative z-10 w-full object-contain drop-shadow-[0_35px_60px_rgba(245,180,0,.25)]"
        />

      </motion.div>



      {/* Content */}
      <div className="absolute bottom-0 left-0 z-30 w-full border-t border-black/10 bg-gradient-to-t from-[#F4F0E9] via-[#FBF9F5]/95 to-transparent backdrop-blur-md">

        <div className="mx-auto flex max-w-7xl flex-col gap-8 px-5 py-8 lg:flex-row lg:items-end lg:justify-between lg:px-8">


          {/* Brand Message */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: .4 }}
            className="max-w-xl"
          >

            <span className="mb-3 block text-xs font-semibold uppercase tracking-[0.35em] text-[#F5B400]">
              Luxury Car Rental
            </span>


            <h1 className="text-4xl font-black leading-[.95] sm:text-5xl md:text-6xl">
              Premium Cars.
              <span className="block text-[#F5B400]">
                Exceptional Journeys.
              </span>
            </h1>


            <p className="mt-5 max-w-lg text-sm leading-7 text-[#666] md:text-base">
              Dream Drive Car Rental provides premium SUVs, luxury sedans and
              chauffeur-driven vehicles for airport transfers, weddings,
              corporate travel and special occasions. Experience comfort,
              reliability and a seamless journey every time.
            </p>

          </motion.div>



          {/* Action + Stats */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: .6 }}
            className="flex flex-col gap-8"
          >

            <button className="group flex w-full items-center justify-center gap-3 rounded-full bg-[#F5B400] px-8 py-4 font-semibold text-black shadow-xl shadow-yellow-500/20 transition hover:bg-[#E6A700] lg:w-fit">

              Book Your Ride

              <FaArrowRight className="transition group-hover:translate-x-1" />

            </button>



            <div className="grid grid-cols-3 gap-6 text-center lg:flex lg:gap-12">

              <div>
                <p className="text-2xl font-bold text-[#F5B400] md:text-4xl">
                  80+
                </p>
                <span className="text-xs uppercase tracking-widest text-[#777]">
                  Vehicles
                </span>
              </div>


              <div>
                <p className="text-2xl font-bold text-[#F5B400] md:text-4xl">
                  24/7
                </p>
                <span className="text-xs uppercase tracking-widest text-[#777]">
                  Service
                </span>
              </div>


              <div>
                <p className="text-2xl font-bold text-[#F5B400] md:text-4xl">
                  5★
                </p>
                <span className="text-xs uppercase tracking-widest text-[#777]">
                  Experience
                </span>
              </div>

            </div>

          </motion.div>


        </div>

      </div>



      {/* Scroll */}
      <div className="absolute bottom-6 left-1/2 z-40 hidden -translate-x-1/2 lg:block">
        <motion.div
          animate={{ y:[0,12,0] }}
          transition={{ repeat:Infinity, duration:1.8 }}
          className="h-10 w-[2px] bg-[#F5B400]"
        />
      </div>

    </section>
  );
}