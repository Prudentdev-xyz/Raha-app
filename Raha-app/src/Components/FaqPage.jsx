import React from 'react'
import FaqAccoedium from './layouts/FaqAccordium'
import FaqAccordium from './layouts/FaqAccordium'

export const FaqPage = () => {
  return (
    <div className='py-10 px-10'>
        <div>
            <h1 className='font-semibold text-2xl tracking-widest text-primary'>FREQUENTLY ASKED QUESTION (FAQ)</h1>
            <p className='font-semibold text-3xl pt-3'>Have any question For Us?</p>
        </div>
        <div className='pt-10'>
         <FaqAccordium />
         <img src="" alt="" />
        </div>
    </div>
  )
}
