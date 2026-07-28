"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  FiArrowUpRight,
  FiChevronRight,
  FiMapPin,
  FiPhone,
  FiMail,
  FiShield,

} from "react-icons/fi";
import Image from "next/image";



const fleet = [
  "Luxury Sedans",
  "Premium SUVs",
  "Wedding Cars",
  "Corporate Travel",
  "Airport Transfers",
];


const services = [
  "Self Drive Rental",
  "Chauffeur Service",
  "Outstation Travel",
  "Monthly Rentals",
  "Event Transportation",
];


export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-black/10 bg-gradient-to-b from-[#FFFDF8] via-[#F8F6F2] to-[#F2EEE8]">


      {/* Ambient Glow */}

      <div className="absolute -left-20 top-0 h-72 w-72 rounded-full bg-[#F5B400]/10 blur-[120px]" />

      <div className="absolute -right-20 bottom-0 h-80 w-80 rounded-full bg-[#F5B400]/10 blur-[140px]" />


      <div className="relative mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:py-20">


        {/* Main Grid */}

        <div className="
          grid
          gap-12
          lg:grid-cols-[1.4fr_.8fr_.8fr_1fr]
        ">



          {/* Brand */}

      {/* Brand */}

<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
>

  <Link href="/" className="flex items-center gap-4">

    {/* Logo Image */}

    <div
      className="
        relative
        h-16
        w-16
        overflow-hidden
        rounded-2xl
        bg-white
        shadow-xl
        border
        border-black/10
      "
    >

      <Image
        src="/logo.jpg"
        alt="Chaudhary Luxury Cars"
        fill
        className="object-contain p-2"
        priority
      />

    </div>


    <div>

      <h2
        className="
          text-2xl
          font-black
          tracking-tight
          text-[#111]
        "
      >
        Dream Drive
      </h2>

      <p className="text-sm text-[#777]">
         Car Rentals
      </p>

    </div>

  </Link>


  <p
    className="
      mt-6
      max-w-md
      text-sm
      leading-7
      text-[#666]
    "
  >
    Experience premium mobility with luxury cars,
    professional chauffeurs and reliable rental solutions
    designed for weddings, business travel and memorable
    journeys.
  </p>


  {/* Trust Card */}

  <div
    className="
      mt-8
      rounded-3xl
      border
      border-[#F5B400]/20
      bg-gradient-to-r
      from-[#FFF4D6]
      to-white
      p-5
    "
  >

    <p
      className="
        text-xs
        uppercase
        tracking-[0.3em]
        text-[#B88600]
      "
    >
      Premium Mobility
    </p>


    <h3
      className="
        mt-3
        text-xl
        font-black
        text-[#111]
      "
    >
      Luxury Cars. Trusted Service.
    </h3>


    <p
      className="
        mt-2
        text-sm
        text-[#666]
      "
    >
      Verified Fleet • Professional Drivers • 24/7 Support
    </p>


  </div>


</motion.div>




          {/* Fleet */}

          <motion.div
            initial={{opacity:0,y:20}}
            whileInView={{opacity:1,y:0}}
            viewport={{once:true}}
          >

            <h3 className="text-lg font-bold text-[#111]">
              Our Fleet
            </h3>


            <div className="mt-6 space-y-3">

              {fleet.map(item=>(

                <Link
                  key={item}
                  href="#fleet"
                  className="
                    group
                    flex
                    items-center
                    gap-3
                    rounded-xl
                    px-2
                    py-2
                    transition
                    hover:bg-white
                  "
                >

                  <span className="
                    flex
                    h-8
                    w-8
                    items-center
                    justify-center
                    rounded-lg
                    bg-[#F5B400]/10
                    text-[#C89500]
                  ">
                    <FiChevronRight/>
                  </span>


                  <span className="
                    text-sm
                    text-[#666]
                    group-hover:text-[#111]
                  ">
                    {item}
                  </span>


                </Link>

              ))}

            </div>

          </motion.div>





          {/* Services */}

          <motion.div
            initial={{opacity:0,y:20}}
            whileInView={{opacity:1,y:0}}
            viewport={{once:true}}
          >

            <h3 className="text-lg font-bold text-[#111]">
              Services
            </h3>


            <div className="mt-6 space-y-3">

              {services.map(item=>(

                <Link
                  key={item}
                  href="#services"
                  className="
                    group
                    flex
                    items-center
                    gap-3
                    rounded-xl
                    px-2
                    py-2
                    hover:bg-white
                  "
                >

                  <FiChevronRight
                    className="
                      text-[#F5B400]
                    "
                  />


                  <span className="
                    text-sm
                    text-[#666]
                  ">
                    {item}
                  </span>


                </Link>

              ))}

            </div>


          </motion.div>





          {/* Contact */}

          <motion.div
            initial={{opacity:0,y:20}}
            whileInView={{opacity:1,y:0}}
            viewport={{once:true}}
          >

            <h3 className="text-lg font-bold text-[#111]">
              Contact
            </h3>


            <div className="mt-6 space-y-4">


              <div className="
                flex
                gap-4
                rounded-2xl
                bg-white
                p-4
                shadow-sm
              ">

                <div className="
                  flex
                  h-11
                  w-11
                  items-center
                  justify-center
                  rounded-xl
                  bg-[#F5B400]/20
                  text-[#B88600]
                ">
                  <FiPhone/>
                </div>


                <div>

                  <p className="text-xs uppercase tracking-widest text-[#999]">
                    Call
                  </p>

                  <p className="mt-1 font-bold text-[#111]">
                    +91 98765 43210
                  </p>

                </div>


              </div>



              <div className="
                flex
                gap-4
                rounded-2xl
                bg-white
                p-4
                shadow-sm
              ">

                <div className="
                  flex
                  h-11
                  w-11
                  items-center
                  justify-center
                  rounded-xl
                  bg-[#F5B400]/20
                  text-[#B88600]
                ">
                  <FiMail/>
                </div>


                <p className="text-sm font-semibold text-[#111]">
                  booking@DreamDrive.com
                </p>


              </div>




           {/* Location */}

<div
  className="
    overflow-hidden
    rounded-2xl
    border
    border-black/10
    bg-white
    shadow-sm
  "
>

  <div className="flex items-start gap-4 p-4">

    <div
      className="
        flex
        h-11
        w-11
        shrink-0
        items-center
        justify-center
        rounded-xl
        bg-[#F5B400]/20
        text-[#B88600]
      "
    >
      <FiMapPin />
    </div>


    <div>

      <p className="text-xs uppercase tracking-widest text-[#999]">
        Visit Us
      </p>

      <p className="mt-1 text-sm font-bold text-[#111]">
        Punjab, India
      </p>

    </div>

  </div>


  {/* Google Map */}

  <iframe
    src="https://www.google.com/maps?q=Punjab,India&output=embed"
    className="
      h-40
      w-full
      grayscale
      transition
      duration-500
      hover:grayscale-0
    "
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
  />

</div>


            </div>


          </motion.div>



        </div>





    





        {/* Stats */}

        <div className="
          mt-10
          grid
          grid-cols-2
          gap-4
          lg:grid-cols-4
        ">


          {[
            ["80+","Luxury Cars"],
            ["24/7","Support"],
            ["4.9★","Customer Rating"],
            ["10K+","Happy Rides"],
          ].map(item=>(

            <div
              key={item[1]}
              className="
                rounded-2xl
                border
                border-black/10
                bg-white
                p-5
                text-center
              "
            >

              <h4 className="
                text-3xl
                font-black
                text-[#F5B400]
              ">
                {item[0]}
              </h4>

              <p className="
                mt-2
                text-xs
                uppercase
                tracking-widest
                text-[#777]
              ">
                {item[1]}
              </p>


            </div>

          ))}


        </div>



        <div className="
          mt-10
          border-t
          border-black/10
          pt-6
          text-center
          text-sm
          text-[#777]
        ">
          © {new Date().getFullYear()} Dream Drive  Rentals. All rights reserved.
        </div>


      </div>


    </footer>
  );
}