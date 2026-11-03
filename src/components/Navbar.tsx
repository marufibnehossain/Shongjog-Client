import React from 'react';
import Link from 'next/link';
import AccountMenu from './small-components/AccountMenu';

const Navbar = () => {
    return (
        <header className='w-full absolute top-5 left-0 z-50'>
            <nav className='w-full'>
                <div className='w-full px-[5vw] border-b border-background'>
                    <div className='max-w-7xl mx-auto bg-surface flex items-center justify-between px-5 py-4 rounded-full'>
                        <div>
                            <Link href='/' className='sm:text-xl text-lg font-bold hover:no-underline'>ShongJog</Link>
                        </div>
                        <Link href='/events' className='sm:text-sm text-xs font-medium hover:no-underline'>Upcoming Events</Link>
                        <AccountMenu />
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;