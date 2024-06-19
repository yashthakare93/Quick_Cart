import React from 'react'
import Hero from '../components/Hero/Hero'
import Categories from '../components/Product/CategoryProducts'
import Testimonials from '../components/Product/CustomerTestimonials'
import FeaturedProducts from '../components/Product/FeatureProducts'
import Newsletter from '../components/Product/NewsletterSubscription'

const Shop = () => {
  return (
    <div>
      <Hero/>
      <FeaturedProducts />
      <Categories />
      <Testimonials />
      <Newsletter />
    </div>
  )
}

export default Shop
