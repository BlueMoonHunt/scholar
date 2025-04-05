import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Header() {
    return (
        <header
            className='relative flex h-24 w-full items-center justify-between bg-popover px-3 sm:px-8'>
            <Link className='flex items-center gap-2' href='/'>
                <Image src="/Scholar.png" height={60} width={60} alt='logo' className='rounded-full' priority />
                <h1 className='flex flex-col text-2xl font-semibold leading-6'>
                    SCHOLAR
                </h1>
            </Link>

            <div className='flex gap-4 '>

            </div>
        </header>
    )
}

export default Header