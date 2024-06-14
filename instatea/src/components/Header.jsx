import Link from 'next/link'
import React from 'react'
import Image from 'next/image'

export default function Header() {
  return (
    <div>
        <div className='flex justify-between'>
            <Link href='/' className='hidden lg:inline-flex'>
                <Image src='/next.svg'
                width={40} height={40} alt='instagram logo'/>
            </Link>
            <input type='text' placeholder='Search' className='bg-gray-50 border border-gray-200 rounded text-sm w-full py-2 px-4 max-w-[210px]'/>
            <button className='text-sm font-semibold text-blue-500'>Log In
            </button>
        </div> 
    </div>
  )
}
