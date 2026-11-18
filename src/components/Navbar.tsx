import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { DropdownMenuAvatar } from './small-components/AvatarDropdown';
import { ThemeToggle } from './theme-toggle';

const Navbar = () => {
    return (
        <header className='w-full absolute top-5 left-0 z-50'>
            <nav className='w-full'>
                <div className='w-full px-[5vw]'>
                    <div className='max-w-7xl mx-auto bg-surface flex items-center justify-between px-5 max-sm:px-3 py-4 max-sm:py-3 rounded-full'>
                        <div>
                            <Link href='/' className='sm:text-xl text-lg font-bold hover:no-underline'>
                                <Image className='max-sm:w-20 dark:hidden' src='/Logo.png' alt='Logo' width={150} height={36} />
                                <Image className='max-sm:w-20 hidden dark:block' src='/Logo-light.png' alt='Logo' width={150} height={36} />
                            </Link>
                        </div>
                        <Link href='/events' className='sm:text-sm text-xs font-medium hover:no-underline' prefetch={false}>Upcoming Events</Link>
                        {/* <Link href='/events' className='sm:text-sm text-xs font-medium hover:no-underline sm:hidden'>Events</Link> */}
                        <div className="sm:w-37.5 flex items-center justify-end gap-2">
                            <ThemeToggle />
                            <DropdownMenuAvatar />
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;