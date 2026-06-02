'use client';

import React, { use } from 'react'
import Link from 'next/link';

export default function Consultation() {
  return (
    <section className='w-full h-150 bg-gradient-to-r from-indigo-950/70 to-indigo-950/70 overflow-hidden'>
        <div className='max-w-7xl flex flex-col items-start justify-center max-w-7xl gap-5 px-8 py-45'>
            <p className='text-sm font-semibold tracking-[3px] font-sans-serif tracking-wide text-white uppercase'>MARKET RESEARCH & CONSULTATION</p>
            <h1 className='text-3xl md:text-5xl font-sans-serif font-bold leading-tight text-white'>Helping Clients Like Hyderabad Metro Rail with<br/>  In-depth Passenger Studies</h1>
            <Link 
            href="/clients?tab=projects"
            className="inline-flex w-75 h-15 items-center justify-center px-10 py-5 rounded-full text-white text-sm md:text-[18px] font-bold bg-[#490eea] shadow-xl hover:scale-105 transition-transform duration-300"
          >
            DISCUSS YOUR PROJECT
          </Link>
        </div>
    </section>
  )
}
