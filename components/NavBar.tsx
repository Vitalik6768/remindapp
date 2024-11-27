import { UserButton } from '@clerk/nextjs'
import React from 'react'
import ThemeSwicher from './ThemeSwicher'
import Logo from './Logo'

function NavBar() {
    return (

        <nav className='flex w-full items-center justify-between p-4 px-8 h-[60px]'>
            <Logo />

            <div className='flex'>
                <ThemeSwicher />

                <UserButton />

            </div>
        </nav>

    )
}

export default NavBar
