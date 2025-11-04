import React from 'react'
import FaqAccoedium from './layouts/FaqAccordium'
import FaqAccordium from './layouts/FaqAccordium'
import BoyRight from "/BoyRight.svg"

export const FaqPage = () => {
  return (
    <div className='py-15 px-15'>
        <div>
            <h1 className='font-semibold text-2xl tracking-widest text-primary'>FREQUENTLY ASKED QUESTION (FAQ)</h1>
            <p className='font-semibold text-3xl pt-3'>Have any question For Us?</p>
        </div>
        <div className='pt-10 flex justify-between'>
        <div className='h-200 w-200'>
         <FaqAccordium />
         </div>
         <img src={BoyRight} className='h-170 w-180'/>
        </div>
    </div>
  )
}
