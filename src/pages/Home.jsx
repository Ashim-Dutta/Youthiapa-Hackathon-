import Hero from '../components/Hero'
import Section_1 from '../components/Section_1'
import NewsFeed from '../components/NewsFeed'
import Story from '../components/Story'
import Footer from '../components/Footer'
import Advertise from '../components/Advertise'
import ScrollVelocity from '../components/ScrollVelocity'
import React from 'react'

const Home = () => {
  return (
    <div>
      <Hero />
            <ScrollVelocity
          texts={['35% off now  ✦ ']} 
          className="custom-scroll-text outline-text2  text-xl sm:text-2xl md:text-3xl lg:text-4xl leading-none p-5 uppercase font-[onder] uppercase bg-[#FE3618]
]"
      />
        <Section_1/>
        <NewsFeed />
        <Advertise/>
      <Story />
      <ScrollVelocity
  texts={['Raised Right by Youthiapa ✦ ', ' ✦ Wear Your Values']} 
  className="custom-scroll-text text-xl sm:text-2xl md:text-3xl lg:text-4xl leading-none p-5 uppercase font-[onder] bg-[#9ACD32]"
/>

      <Footer />
      
    </div>
  )
}

export default Home