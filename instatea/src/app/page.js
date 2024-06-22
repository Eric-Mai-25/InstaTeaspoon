import React from 'react'

export default function Home() {
  return (
    <div className='shadow-sm border-b sticky top-0 bg-white z-30 p-3'>
        <div className='flex justify-between items-center max-w-8xl mx-auto'>
            <Link href='/' className='hidden lg:inline-flex'>
                <Image src='/next.svg'
                width={40} height={40} alt='instagram logo'/>
            </Link>
            <input type='text' placeholder='Search' className='bg-gray-50 border border-gray-200 rounded text-sm w-full py-2 px-4 max-w-[210px]'/>
            <button onClick={()=> signIn()} className='text-sm font-semibold text-blue-500'>Log In
            </button>
        </div> 
    </div>
  )
}
