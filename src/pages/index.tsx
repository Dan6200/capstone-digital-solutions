import React from 'react'
import type { ReactElement } from 'react'
import Layout from '../components/layout'
import type { NextPageWithLayout } from './_app'
import Hero from '../components/Hero'
import Services from '../components/services'
// import PortfolioSection from '../components/portfolio-section'

const IndexPage: NextPageWithLayout = () => (
    <>
        <Hero />
        <Services />
    </>
)

IndexPage.getLayout = function getLayout(page: ReactElement) {
    return <Layout>{page}</Layout>
}

export default IndexPage
