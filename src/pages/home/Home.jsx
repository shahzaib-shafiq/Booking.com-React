import React from 'react'


import Header from '../../components/header/Header'
import Navbar from '../../components/navbar/Navbar'
import Featured from '../../components/featured/Featured'

import "./home.css"
import PropertyList from '../../components/propertyList/PropertyList'
import Featuredproperties from '../../components/featuredproperties/Featuredproperties'
import MailList from '../../components/mailList/MailList'
import Footer from '../../components/footer/Footer'

const Home = () => {
  return (
    <div>
      <Navbar/>
      <Header/>
      <div className="homeContainer">
  <Featured/>
      <h1 className="homeTitle">Browser Property by Type</h1>
      <PropertyList/>
      <h1>Home That Guest's Love</h1>
      <Featuredproperties/>
      <MailList/>
      <Footer/>
      </div>

          </div>
  )
}

export default Home
