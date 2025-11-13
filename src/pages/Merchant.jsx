import React from 'react'
import MerchantBanner from '../components/MerchantBanner'
import MerchantSection from '../components/MerchantSection'
import StatsSection from '../components/StatsSection'
import MerchantLink from '../components/MerchantLink'

const Blog = () => {
  return (
    <>
        <MerchantBanner />
        <StatsSection />
        <MerchantSection />
        <MerchantLink />
    </>
  )
}

export default Blog