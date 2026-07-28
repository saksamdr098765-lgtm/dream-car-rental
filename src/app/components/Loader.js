"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { FiArrowRight } from "react-icons/fi";

export default function Loader() {

  const [show, setShow] = useState(true);


  useEffect(() => {

    const timer = setTimeout(() => {
      setShow(false);
    }, 2500);


    return () => clearTimeout(timer);

  }, []);



  if (!show) return null;


  return (

    <motion.div

      initial={{opacity:1}}
      animate={{opacity:0}}
      transition={{
        delay:2.1,
        duration:.5
      }}

      className="
        fixed
        inset-0
        z-[9999]
        flex
        items-center
        justify-center
        overflow-hidden
        bg-[#050505]
      "
    >


      {/* Road Glow */}

      <div
        className="
          absolute
          bottom-0
          h-48
          w-full
          bg-gradient-to-t
          from-[#F5B400]/20
          to-transparent
        "
      />



      {/* Moving Road Line */}

      <motion.div

        initial={{
          x:"-100%"
        }}

        animate={{
          x:"100%"
        }}

        transition={{
          duration:1.5,
          repeat:Infinity,
          ease:"linear"
        }}

        className="
          absolute
          bottom-20
          h-[3px]
          w-[500px]
          bg-gradient-to-r
          from-transparent
          via-[#F5B400]
          to-transparent
        "

      />




      {/* Car Animation */}

      <motion.div

        initial={{
          x:"-120%",
          opacity:0
        }}

        animate={{
          x:"0%",
          opacity:1
        }}

        transition={{
          duration:1.2,
          ease:[0.22,1,0.36,1]
        }}

        className="
          absolute
          bottom-28
          text-7xl
        "

      >
        🚘

      </motion.div>





      <div className="relative z-10 text-center">


        {/* Logo */}

        <motion.div

          initial={{
            scale:.6,
            opacity:0
          }}

          animate={{
            scale:1,
            opacity:1
          }}

          transition={{
            delay:.5,
            duration:.8
          }}

          className="
            relative
            mx-auto
            h-24
            w-24
            overflow-hidden
            rounded-3xl
            bg-white
            shadow-[0_0_50px_rgba(245,180,0,.4)]
          "

        >

          <Image
            src="/logo.jpg"
            alt="Chaudhary Cars"
            fill
            priority
            className="object-contain p-3"
          />

        </motion.div>





        {/* Brand */}

        <motion.h1

          initial={{
            opacity:0,
            y:20
          }}

          animate={{
            opacity:1,
            y:0
          }}

          transition={{
            delay:.8
          }}

          className="
            mt-6
            text-3xl
            font-black
            tracking-[0.2em]
            text-white
          "

        >
          Dream Drive

        </motion.h1>




        <motion.p

          initial={{
            opacity:0
          }}

          animate={{
            opacity:1
          }}

          transition={{
            delay:1.1
          }}

          className="
            mt-3
            flex
            items-center
            justify-center
            gap-2
            text-xs
            uppercase
            tracking-[0.45em]
            text-[#F5B400]
          "

        >

          Your Journey Begins

          <FiArrowRight/>

        </motion.p>





        {/* Booking Loading */}

        <div
          className="
            mx-auto
            mt-8
            h-[2px]
            w-48
            overflow-hidden
            bg-white/20
          "
        >

          <motion.div

            initial={{
              x:"-100%"
            }}

            animate={{
              x:"100%"
            }}

            transition={{
              duration:1.8,
              ease:"easeInOut"
            }}

            className="
              h-full
              bg-gradient-to-r
              from-[#C89500]
              via-[#F5B400]
              to-white
            "

          />

        </div>



        <p
          className="
            mt-4
            text-[10px]
            uppercase
            tracking-[0.35em]
            text-white/40
          "
        >
          Luxury Rentals • Chauffeur • Airport Transfers
        </p>


      </div>



    </motion.div>

  );
}