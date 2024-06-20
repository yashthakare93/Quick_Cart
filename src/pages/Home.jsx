import React from 'react'
import Hero from '../components/Hero/Hero'
import Categories from '../components/Product/CategoryProducts'
import FeaturedProducts from '../components/Product/MobileDeals'
import Newsletter from '../components/Product/NewsletterSubscription'
import { MobileDealsProvider } from '../context/MobileDealsContext'

const Shop = () => {
  return (
    <div>
      <MobileDealsProvider>
      <Hero/>
      <FeaturedProducts />
      <Categories />
      <Newsletter />
      </MobileDealsProvider>
     
    </div>
  )
}

export default Shop
