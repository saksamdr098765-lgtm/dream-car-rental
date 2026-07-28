"use client";

import { motion } from "framer-motion";
import { FiArrowRight, FiCheck } from "react-icons/fi";


const benefits = [
  "Luxury Fleet",
  "Professional Chauffeurs",
  "Airport & Corporate Travel",
  "24/7 Support",
];


export default function CTA() {
  return (
    <section
      className="
        bg-[#F8F6F2]
        px-4
        py-14
        sm:px-6
        sm:py-20
        lg:px-10
        lg:py-28
      "
    >


      <motion.div

        initial={{
          opacity:0,
          y:30
        }}

        whileInView={{
          opacity:1,
          y:0
        }}

        viewport={{
          once:true
        }}

        transition={{
          duration:.6
        }}

        className="
          relative
          mx-auto
          max-w-7xl
          overflow-hidden
          rounded-[28px]
          border
          border-black/10
          bg-[#FFFDF8]
          px-5
          py-8
          sm:rounded-[36px]
          sm:px-8
          sm:py-10
          lg:px-16
          lg:py-14
        "

      >


        {/* Background Text */}

        <div
          className="
            pointer-events-none
            absolute
            -right-4
            top-8
            select-none
            text-[90px]
            font-black
            leading-none
            text-black/[0.03]
            sm:text-[140px]
            lg:text-[180px]
          "
        >
          RIDE
        </div>




        {/* Gold Glow */}

        <div
          className="
            absolute
            -right-20
            bottom-0
            h-52
            w-52
            rounded-full
            bg-[#F5B400]/20
            blur-[100px]
            sm:h-72
            sm:w-72
            sm:blur-[120px]
          "
        />





        <div
          className="
            relative
            z-10
            flex
            flex-col
            gap-8
            lg:grid
            lg:grid-cols-[1fr_auto]
            lg:items-center
            lg:gap-10
          "
        >




          {/* Content */}

          <div>


            <span
              className="
                text-[10px]
                font-bold
                uppercase
                tracking-[0.35em]
                text-[#C89500]
                sm:text-xs
                sm:tracking-[0.4em]
              "
            >
              Premium Car Rental
            </span>




            <h2
              className="
                mt-4
                max-w-3xl
                text-3xl
                font-black
                leading-[1.05]
                tracking-tight
                text-[#111]
                sm:mt-5
                sm:text-5xl
                lg:text-6xl
              "
            >

              Ready For Your

              <span
                className="
                  block
                  text-[#F5B400]
                "
              >
                Next Journey?
              </span>

            </h2>





            <p
              className="
                mt-4
                max-w-xl
                text-sm
                leading-6
                text-[#666]
                sm:mt-5
                sm:text-base
                sm:leading-7
              "
            >
              Choose from our premium collection of luxury sedans,
              SUVs and chauffeur-driven vehicles designed for
              business, weddings and unforgettable trips.
            </p>






            {/* Benefits */}

            <div
              className="
                mt-6
                flex
                flex-wrap
                gap-2
                sm:mt-8
                sm:gap-3
              "
            >

              {benefits.map((item)=>(

                <div
                  key={item}
                  className="
                    flex
                    items-center
                    gap-2
                    rounded-full
                    border
                    border-black/10
                    bg-white
                    px-3
                    py-2
                    text-[11px]
                    font-semibold
                    text-[#444]
                    sm:px-4
                    sm:text-xs
                  "
                >

                  <FiCheck
                    className="
                      text-[#F5B400]
                    "
                  />

                  {item}

                </div>

              ))}


            </div>


          </div>






          {/* CTA Button */}

          <div
            className="
              flex
              flex-col
              items-stretch
              gap-5
              sm:items-start
              lg:items-end
            "
          >


            <button
              className="
                group
                flex
                w-full
                items-center
                justify-center
                gap-3
                rounded-full
                bg-[#111]
                px-7
                py-4
                text-xs
                font-bold
                uppercase
                tracking-wider
                text-white
                transition-all
                duration-300
                hover:bg-[#F5B400]
                hover:text-black
                sm:w-auto
                sm:px-8
                sm:py-5
              "
            >

              Book Your Ride


              <span
                className="
                  flex
                  h-9
                  w-9
                  items-center
                  justify-center
                  rounded-full
                  bg-[#F5B400]
                  text-black
                  transition
                  group-hover:bg-black
                  group-hover:text-white
                "
              >

                <FiArrowRight />

              </span>


            </button>






            {/* Vehicle Count */}

            <div
              className="
                text-left
                sm:text-right
              "
            >

              <p
                className="
                  text-3xl
                  font-black
                  text-[#111]
                "
              >
                80+
              </p>


              <p
                className="
                  text-[10px]
                  uppercase
                  tracking-[0.3em]
                  text-[#777]
                  sm:text-xs
                "
              >
                Premium Vehicles
              </p>


            </div>


          </div>



        </div>



      </motion.div>


    </section>
  );
}