import React from 'react'
import Hero from './components/Hero'
import FeaturedCars from './components/FeaturedCar'
import FleetCategories from './components/FleetCategories'
import Testimonials from './components/Testimonials'
import Footer from './components/Footer'
import CTA from './components/CTA'

export default function page() {
  return (
    <div>
      <Hero></Hero>
      <FeaturedCars></FeaturedCars>
      <FleetCategories></FleetCategories>
      <Testimonials></Testimonials>
      <CTA></CTA>
      <Footer></Footer>
    </div>
  )
}
