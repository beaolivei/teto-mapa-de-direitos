import React from "react"

import Layout from "../components/common/layout/layout"
import SEO from "../components/common/layout/seo"
import Navigation from "../components/common/navigation/navigation"

import Header from "../components/sections/header"
import QuemSomos from "../components/sections/quemsomos"
import MapaDeDados from "../components/sections/mapadedados"
import Footer from "../components/sections/footer"
import TorneAmigo from "../components/sections/torneamigo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Navigation />
    <Header />
    <QuemSomos />
    <MapaDeDados />
    <TorneAmigo />
    <Footer />
  </Layout>
)

export default IndexPage
