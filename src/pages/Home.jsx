import React from 'react'
import Hero from '../components/Hero/Hero'
import Categories from '../HomeProducts/CategoryProducts'
import MobileDeals from '../HomeProducts/MobileDeals'
import Newsletter from '../HomeProducts/NewsletterSubscription'
import { MobileDealsProvider } from '../context/MobileDealsContext'
import HeadphoneDeals from '../HomeProducts/HeadphoneDeals'
import { HeadphoneDealsProvider } from '../context/HeadphoneContext'
import SportHealthcare from '../HomeProducts/SportHealthcare'
import { SportHealthcareProvider } from '../context/SportHealthcareContext'
import ItemGrid from '../HomeProducts/ItemGrid'
import BestFashionDeals from '../HomeProducts/BestFashionDeals'
import { BestFashionDealsProvider } from '../context/FasionDealsContext'
import Navbar from '../components/Navbar/Navbar'

const Shop = () => {
  return (
    <div className='px-6'>
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
