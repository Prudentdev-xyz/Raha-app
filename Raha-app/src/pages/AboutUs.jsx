import React from 'react'
import { Header } from '../components/layouts/Header'
import { Footer } from '../components/layouts/Footer'
import { HeroAboutUs } from '../components/layouts/HeroAboutUs'
import { About } from '../components/layouts/About'

export const AboutUs = () => {
  return (
    <div>
        <div>
          <About />
          <HeroAboutUs />
        </div>
    </div>
  )
}
