import React from 'react'
import Hero from '../components/Hero/Hero'
import Categories from '../components/Product/CategoryProducts'
import MobileDeals from '../components/Product/MobileDeals'
import Newsletter from '../components/Product/NewsletterSubscription'
import { MobileDealsProvider } from '../context/MobileDealsContext'
import HeadphoneDeals from '../components/Product/HeadphoneDeals'
import { HeadphoneDealsProvider } from '../context/HeadphoneContext'
import SportHealthcare from '../components/Product/SportHealthcare'
import { SportHealthcareProvider } from '../context/SportHealthcareContext'
import ItemGrid from '../components/Product/ItemGrid'

const Shop = () => {
  return (
    <div>

      <Hero />
      <MobileDealsProvider>
        <MobileDeals />
      </MobileDealsProvider>
      <SportHealthcareProvider>
        <SportHealthcare/>
      </SportHealthcareProvider>
      <HeadphoneDealsProvider>
        <HeadphoneDeals />
        <ItemGrid/>
      </HeadphoneDealsProvider>
      
      <Categories />

      <Newsletter />


    </div>
  )
}

export default Shop
