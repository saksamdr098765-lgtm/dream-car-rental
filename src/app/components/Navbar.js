"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiGrid,
  FiBriefcase,
  FiUser,
  FiPhone,
  FiX,
} from "react-icons/fi";

export default function Navbar() {

  const [open, setOpen] = useState(false);


  const navLinks = [
    {
      name: "Fleet",
      icon: FiGrid,
      href: "#fleet",
    },
    {
      name: "Services",
      icon: FiBriefcase,
      href: "#services",
    },
    {
      name: "About",
      icon: FiUser,
      href: "#about",
    },
    {
      name: "Contact",
      icon: FiPhone,
      href: "#contact",
    },
  ];


  return (

    <motion.header
      initial={{ opacity:0, y:-15 }}
      animate={{ opacity:1, y:0 }}
      transition={{ duration:.5 }}
      className="sticky left-0 top-0 z-50 w-full"
    >

      <div className="
        border-b
        border-black/5
        bg-gradient-to-b
        from-[#FFFDF8]/95
        via-[#F8F6F2]/90
        to-transparent
        backdrop-blur-md
      ">


        <div className="
          flex
          items-center
          justify-between
          px-5
          py-3
          sm:px-6
          md:px-10
        ">


          {/* Logo */}

          <Link href="/" className="flex items-center gap-3">

            <div className="
              relative
              h-10
              w-10
              overflow-hidden
              rounded-xl
              bg-white
              shadow-md
            ">

              <Image
                src="/logo.jpg"
                alt="Chaudhary Luxury Cars"
                fill
                className="object-contain p-1.5"
                priority
              />

            </div>


            <div className="leading-none">

              <h1 className="
                text-lg
                font-black
                tracking-[-0.06em]
                text-[#111]
              ">
                Dream Drive
              </h1>

              <p className="
                mt-1
                text-[8px]
                uppercase
                tracking-[0.45em]
                text-[#777]
              ">
                CAR RENTAL
              </p>

            </div>

          </Link>





          {/* Desktop Navigation */}

          <nav className="hidden items-center gap-8 lg:flex">

            {navLinks.map((item)=>{

              const Icon=item.icon;

              return (

                <Link
                  key={item.name}
                  href={item.href}
                  className="
                    group
                    flex
                    items-center
                    gap-2
                    text-xs
                    uppercase
                    tracking-[0.18em]
                    text-[#444]
                    transition
                    hover:text-[#F5B400]
                  "
                >

                  <Icon
                    className="
                      h-4
                      w-4
                      text-[#777]
                      transition
                      group-hover:text-[#F5B400]
                    "
                  />

                  {item.name}

                </Link>

              );

            })}

          </nav>





          {/* Desktop Actions */}

          <div className="hidden items-center gap-7 lg:flex">

            <Link
              href="tel:+919999999999"
              className="
                flex
                items-center
                gap-2
                text-xs
                uppercase
                tracking-[0.15em]
                text-[#111]
                hover:text-[#F5B400]
              "
            >

              <FiPhone/>

              Call

            </Link>



            <Link
              href="#booking"
              className="
                border-b
                border-[#111]
                pb-1
                text-xs
                uppercase
                tracking-[0.18em]
                text-[#111]
                hover:border-[#F5B400]
                hover:text-[#F5B400]
              "
            >

              Book Now

            </Link>


          </div>





          {/* Mobile Button */}

          <button
            onClick={()=>setOpen(!open)}
            className="
              flex
              h-10
              w-10
              items-center
              justify-center
              rounded-xl
              bg-white
              text-[#F5B400]
              lg:hidden
            "
          >

            {open ? (
              <FiX size={20}/>
            ):(
              <div className="space-y-1.5">

                <span className="block h-[2px] w-5 bg-[#F5B400]" />
                <span className="block h-[2px] w-3 bg-[#F5B400]" />

              </div>
            )}

          </button>



        </div>



        {/* Mobile Menu */}

        <AnimatePresence>

        {open && (

          <motion.div
            initial={{
              opacity:0,
              height:0
            }}
            animate={{
              opacity:1,
              height:"auto"
            }}
            exit={{
              opacity:0,
              height:0
            }}
            className="
              overflow-hidden
              border-t
              border-black/5
              bg-[#FFFDF8]
              lg:hidden
            "
          >

            <div className="px-5 py-6 space-y-2">


              {navLinks.map((item)=>{

                const Icon=item.icon;

                return (

                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={()=>setOpen(false)}
                    className="
                      flex
                      items-center
                      gap-4
                      rounded-2xl
                      px-4
                      py-4
                      text-sm
                      font-semibold
                      uppercase
                      tracking-widest
                      text-[#333]
                      transition
                      hover:bg-[#F5B400]/10
                      hover:text-[#B88600]
                    "
                  >

                    <span className="
                      flex
                      h-10
                      w-10
                      items-center
                      justify-center
                      rounded-xl
                      bg-white
                      text-[#F5B400]
                    ">

                      <Icon/>

                    </span>


                    {item.name}


                  </Link>

                );

              })}



              <Link
                href="#booking"
                onClick={()=>setOpen(false)}
                className="
                  mt-4
                  flex
                  items-center
                  justify-center
                  rounded-full
                  bg-[#F5B400]
                  px-6
                  py-4
                  text-sm
                  font-bold
                  uppercase
                  tracking-widest
                  text-black
                "
              >
                Book Your Ride
              </Link>


            </div>


          </motion.div>

        )}

        </AnimatePresence>


      </div>


    </motion.header>

  );
}