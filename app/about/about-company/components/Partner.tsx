import React from 'react'
import Link from 'next/link';


export default function Partner() {
  return (
    <section >
        <div className='w-full bg-gradient-to-r from-indigo-600/30 to-indigo-600/40 mx-auto flex flex-col items-start gap-5 px-8 py-20'>
        <p className='text-sm font-sans-serif text-white font-bold leading-tight text-center mb-2'>Partner With Our Experts</p>
        <h1 className='text-3xl md:text-7xl text-white font-bold leading-tight mb-8'>Driving Insights for Global Leaders like Hyundai Motors</h1>
        <Link 
            href="/clients?tab=projects"
            className="inline-flex w-60 h-13 items-center justify-center px-6 py-5 rounded-full text-[#490eea] text-sm font-bold bg-white shadow-xl hover:scale-105 transition-transform duration-300"
          >
            DISCUSS YOUR PROJECT
          </Link>
        </div>
    </section>
  )
}