"use client";

import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";


const cars = [
  {
    name: "Mercedes-Benz E-Class",
    type: "Luxury Sedan",
    image: "/mercades.jpg",
    seats: "5 Seats",
    price: "₹8,999/day",
  },
  {
    name: "Toyota Fortuner",
    type: "Premium SUV",
    image: "/2.jpg",
    seats: "7 Seats",
    price: "₹6,999/day",
  },
  {
    name: "BMW 5 Series",
    type: "Executive Sedan",
    image: "/3.jpg",
    seats: "5 Seats",
    price: "₹9,999/day",
  },
];


export default function FeaturedCars() {
  return (

    <section className="bg-[#F8F6F2] px-5 py-24 md:px-10">


      {/* Heading */}
      <div className="mx-auto mb-12 max-w-7xl">

        <p className="
          text-xs
          uppercase
          tracking-[0.45em]
          text-[#C89500]
        ">
          Our Collection
        </p>


        <h2 className="
          mt-5
          text-5xl
          font-black
          leading-none
          tracking-tight
          text-[#111]
          md:text-7xl
        ">
          Choose Your
          <span className="block text-[#F5B400]">
            Perfect Ride
          </span>
        </h2>

      </div>




      <Swiper
        modules={[Pagination, Autoplay]}
        pagination={{
          clickable:true
        }}
        autoplay={{
          delay:4500
        }}
        spaceBetween={24}
        slidesPerView={1}
        breakpoints={{
          768:{
            slidesPerView:2
          },
          1200:{
            slidesPerView:3
          }
        }}
        className="max-w-7xl"
      >


        {cars.map((car,index)=>(

          <SwiperSlide key={car.name}>


            <motion.div

              initial={{
                opacity:0,
                y:40
              }}

              whileInView={{
                opacity:1,
                y:0
              }}

              transition={{
                duration:.6,
                delay:index*.15
              }}

              className="
                group
                relative
                h-[520px]
                overflow-hidden
                rounded-[32px]
                bg-black
              "

            >


              {/* Car Image */}

              <img
                src={car.image}
                alt={car.name}
                className="
                  absolute
                  inset-0
                  h-full
                  w-full
                  object-cover
                  object-center
                  transition
                  duration-700
                  group-hover:scale-110
                "
              />



              {/* Dark Luxury Overlay */}

              <div
                className="
                  absolute
                  inset-0
                  bg-gradient-to-t
                  from-black
                  via-black/40
                  to-transparent
                "
              />



              {/* Badge */}

              <div
                className="
                  absolute
                  left-6
                  top-6
                  rounded-full
                  border
                  border-white/20
                  bg-white/10
                  px-4
                  py-2
                  text-[10px]
                  uppercase
                  tracking-[0.3em]
                  text-white
                  backdrop-blur-md
                "
              >
                Premium Fleet
              </div>




              {/* Floating Action */}

              <motion.button

                animate={{
                  y:[0,-8,0]
                }}

                transition={{
                  repeat:Infinity,
                  duration:3
                }}

                className="
                  absolute
                  right-6
                  top-1/2
                  z-20
                  flex
                  h-16
                  w-16
                  -translate-y-1/2
                  items-center
                  justify-center
                  rounded-full
                  bg-[#F5B400]
                  text-black
                  shadow-xl
                  shadow-yellow-500/30
                  transition
                  hover:rotate-45
                  hover:scale-110
                "

              >

                <FaArrowRight size={20}/>

              </motion.button>




              {/* Content */}

              <div
                className="
                  absolute
                  bottom-0
                  left-0
                  w-full
                  p-7
                  text-white
                  md:p-8
                "
              >

                <p
                  className="
                    text-xs
                    uppercase
                    tracking-[0.35em]
                    text-[#F5B400]
                  "
                >
                  {car.type}
                </p>



                <h3
                  className="
                    mt-3
                    text-3xl
                    font-black
                    tracking-tight
                  "
                >
                  {car.name}
                </h3>




                <div
                  className="
                    mt-6
                    flex
                    items-center
                    justify-between
                    border-t
                    border-white/20
                    pt-5
                  "
                >

                  <div>

                    <p className="text-sm text-white/70">
                      {car.seats}
                    </p>

                    <p className="
                      mt-1
                      text-xl
                      font-bold
                    ">
                      {car.price}
                    </p>

                  </div>


                  <span
                    className="
                      text-[10px]
                      uppercase
                      tracking-[0.3em]
                      text-white/60
                    "
                  >
                    Book Now
                  </span>


                </div>


              </div>


            </motion.div>


          </SwiperSlide>

        ))}


      </Swiper>


    </section>

  );
}