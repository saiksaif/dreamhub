// "use client"

import './globals.css'
// import dynamic from 'next/dynamic';

import Hero from './components/Hero';
import Service from './components/Service';
import Portfolio from './components/Portfolio';
import Advantage from './components/Advantage';
import Testimonial from './components/Testimonial';
import Discuss from './components/Discuss';

import Data from '../json/landingPage.json';


export default function Home() {

  return (
    <main className="">
      <Hero />
      <Service data={Data.service} />
      <Portfolio data={Data.portfolio} />
      <Advantage data={Data.advantage} />
      <Testimonial data={Data.testimonial} />
      <Discuss />
    </main>
  )
}
