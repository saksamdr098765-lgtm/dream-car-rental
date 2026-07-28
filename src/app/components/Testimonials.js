"use client";

import { motion } from "framer-motion";
import {
  FiStar,
  FiShield,
  FiCheckCircle,
  FiArrowRight,
} from "react-icons/fi";


const reviews = [
  {
    id:"01",
    name:"Arjun Mehta",
    city:"Chandigarh",
    vehicle:"Mercedes-Benz E-Class",
    trip:"Airport Transfer",
    review:
      "The experience was exceptional. The car arrived perfectly on time, the chauffeur was professional, and the entire journey felt truly premium.",
  },

  {
    id:"02",
    name:"Simran Kaur",
    city:"Mohali",
    vehicle:"Toyota Fortuner",
    trip:"Wedding Event",
    review:
      "Chaudhary Car Rental made our wedding travel effortless. The vehicle was spotless and the service quality was outstanding.",
  },

  {
    id:"03",
    name:"Rahul Sharma",
    city:"Delhi",
    vehicle:"BMW 5 Series",
    trip:"Corporate Travel",
    review:
      "Excellent service for business travel. Luxury cars, professional drivers and a smooth booking process.",
  },
];


export default function Testimonials(){

return(

<section className="relative overflow-hidden bg-[#F8F6F2] py-24">


{/* Background */}

<div className="
absolute
-left-20
top-20
h-72
w-72
rounded-full
bg-yellow-200/40
blur-[130px]
"/>

<div className="
absolute
right-0
bottom-0
h-80
w-80
rounded-full
bg-yellow-100
blur-[120px]
"/>



<div className="
relative
mx-auto
max-w-7xl
px-5
md:px-10
">


{/* Heading */}

<div className="max-w-3xl">


<p className="
text-xs
uppercase
tracking-[0.45em]
text-[#C89500]
">
Guest Experiences
</p>


<h2 className="
mt-5
text-5xl
font-black
leading-none
text-[#111]
md:text-7xl
">

Trusted By

<span className="block text-[#F5B400]">
Luxury Travelers
</span>

</h2>


<p className="
mt-5
max-w-xl
leading-7
text-[#666]
">
Thousands of guests trust Chaudhary Car Rental for premium
vehicles, professional chauffeurs and memorable journeys.
</p>


</div>





{/* Reviews */}

<div className="
mt-14
grid
gap-6
lg:grid-cols-3
">


{reviews.map((item,index)=>(


<motion.div

key={item.id}

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
delay:index*.1
}}

className="
group
relative
overflow-hidden
rounded-[32px]
border
border-black/5
bg-white
p-7
transition
hover:-translate-y-2
hover:shadow-2xl
"

>


{/* Quote */}

<div className="
absolute
right-6
top-3
text-[100px]
font-black
leading-none
text-yellow-100
">
"
</div>



<div className="relative">


{/* Stars */}

<div className="flex gap-1">

{
[1,2,3,4,5].map(i=>(

<FiStar
key={i}
className="
fill-[#F5B400]
text-[#F5B400]
"
/>

))
}

</div>



<p className="
mt-6
text-lg
font-medium
leading-8
text-[#333]
">

"{item.review}"

</p>




<div className="
mt-8
border-t
border-black/10
pt-6
">


<h3 className="
text-xl
font-black
text-[#111]
">
{item.name}
</h3>


<p className="
mt-1
text-sm
text-gray-500
">
{item.city}
</p>



<div className="
mt-5
flex
items-center
justify-between
">


<div>

<p className="
text-xs
uppercase
tracking-widest
text-gray-400
">
Vehicle
</p>

<p className="
mt-1
font-semibold
text-[#111]
">
{item.vehicle}
</p>

</div>



<div className="
flex
h-11
w-11
items-center
justify-center
rounded-full
bg-[#F5B400]
text-black
transition
group-hover:rotate-[-5deg]
">

<FiArrowRight/>

</div>


</div>



</div>


</div>


</motion.div>


))}


</div>









</div>


</section>

)

}