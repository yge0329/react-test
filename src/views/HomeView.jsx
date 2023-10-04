import React from 'react'
import Header from '../components/Header'
import Skip from '../components/Skip'
import Intro from '../components/Intro'
import Skil from '../components/Skil'
import Site from '../components/Site'
import Port from '../components/Port'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import Main from '../components/Main'

const HomeView = () => {
  return (
    <>
        <Skip />
        <Header />
        <Main>
            <Intro />
            <Skil />
            <Site />
            <Port />
            <Contact />
        </Main>
        <Footer />
    </> // <div></div>대신 <></> 로 써줘도 됨(필요없는 div 안 쓰려면)
    
  )
}

export default HomeView