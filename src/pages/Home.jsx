import React from 'react'
import Hero from '../components/Hero/Hero'
import Categories from '../Product/CategoryProducts'
import MobileDeals from '../Product/MobileDeals'
import Newsletter from '../Product/NewsletterSubscription'
import { MobileDealsProvider } from '../context/MobileDealsContext'
import HeadphoneDeals from '../Product/HeadphoneDeals'
import { HeadphoneDealsProvider } from '../context/HeadphoneContext'
import SportHealthcare from '../Product/SportHealthcare'
import { SportHealthcareProvider } from '../context/SportHealthcareContext'
import ItemGrid from '../Product/ItemGrid'
import BestFashionDeals from '../Product/BestFashionDeals'
import { BestFashionDealsProvider } from '../context/FasionDealsContext'
import Navbar from '../components/Navbar/Navbar'

const Shop = () => {
  return (
    <div>
      <Navbar/>
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
      <BestFashionDealsProvider>
      <BestFashionDeals/>
      </BestFashionDealsProvider>
   
      <Categories />

      <Newsletter />


    </div>
  )
}

export default Shop
