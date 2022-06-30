import React from 'react'

import Header from '../../components/Header'
import Body from '../../components/Body'
import Footer from '../../components/Footer'

const Home = ({user}) => {
  return (
    <>
      <Header user = {user}/>
      <Body/>
      <Footer/>
    </>
  )
}

export default Home
