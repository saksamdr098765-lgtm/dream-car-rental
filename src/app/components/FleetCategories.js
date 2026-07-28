"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";


const categories = [
  {
    title:"Luxury Sedans",
    desc:"Mercedes, BMW & Audi executive sedans for premium journeys.",
    image:"/5.jpg",
    featured:true,
  },

  {
    title:"Premium SUVs",
    desc:"Powerful SUVs built for comfort and long journeys.",
    image:"/6.jpg",
  },

  {
    title:"Wedding Cars",
    desc:"Elegant cars for your special celebrations.",
    image:"/8.jpg",
  },

  {
    title:"Airport Transfers",
    desc:"On-time luxury travel with professional service.",
    image:"/7.jpg",
  },

  {
    title:"Corporate Travel",
    desc:"Executive mobility solutions for businesses.",
    image:"/4.jpg",
  }
];



export default function FleetCategories(){

return(

<section className="bg-[#F8F6F2] py-24">


<div className="mx-auto max-w-7xl px-5 md:px-10">


{/* Heading */}

<div className="mb-14">

<p className="
text-xs
uppercase
tracking-[0.45em]
text-[#C89500]
">
Our Services
</p>


<h2 className="
mt-5
text-5xl
font-black
leading-none
text-[#111]
md:text-7xl
">

Choose Your

<span className="block text-[#F5B400]">
Perfect Experience
</span>

</h2>


<p className="
mt-5
max-w-xl
text-gray-600
leading-7
">
Whether you need a luxury sedan for business travel or
a premium SUV for your next journey, we have the right
vehicle category for every occasion.
</p>

</div>





<div className="
grid
gap-5
lg:grid-cols-4
">


{/* Featured */}

<motion.div
whileHover={{y:-6}}
className="
relative
overflow-hidden
rounded-[32px]
lg:col-span-2
lg:row-span-2
h-[520px]
"
>


<Image
src="/5.jpg"
fill
alt="Luxury Sedan"
className="
object-cover
transition
duration-700
hover:scale-105
"
/>


<div className="
absolute
inset-0
bg-gradient-to-t
from-black
via-black/30
to-transparent
"/>



<div className="
absolute
bottom-0
p-8
text-white
">


<p className="
text-xs
uppercase
tracking-[0.4em]
text-[#F5B400]
">
Featured Fleet
</p>


<h3 className="
mt-4
text-4xl
font-black
">
Luxury
<br/>
Sedans
</h3>


<p className="
mt-3
max-w-sm
text-white/70
">
Mercedes-Benz, BMW and Audi vehicles designed
for executive comfort.
</p>


<Link
href="/fleet"
className="
mt-6
inline-flex
items-center
gap-3
font-semibold
text-[#F5B400]
"
>

Explore Fleet

<FiArrowRight/>

</Link>


</div>


</motion.div>





{/* Other Categories */}

{categories
.filter(item=>!item.featured)
.map((item,index)=>(


<motion.div

key={item.title}

whileHover={{y:-6}}

className="
relative
h-[250px]
overflow:hidden
rounded-[28px]
"

>


<Image
src={item.image}
fill
alt={item.title}
className="
object-cover
transition
duration-700
hover:scale-110
"
/>


<div className="
absolute
inset-0
bg-gradient-to-t
from-black
via-black/20
to-transparent
"/>



<div className="
absolute
bottom-0
p-6
text-white
">


<h3 className="
text-2xl
font-black
">
{item.title}
</h3>


<p className="
mt-2
text-sm
text-white/70
">
{item.desc}
</p>



<div className="
mt-4
flex
h-9
w-9
items-center
justify-center
rounded-full
bg-[#F5B400]
text-black
">

<FiArrowRight/>

</div>


</div>


</motion.div>


))}



</div>


</div>


</section>

)

}