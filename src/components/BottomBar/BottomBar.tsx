"use client"
import { sideLinks } from '@/constants';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react'

const BottomBar = () => {
    const pathname = usePathname();
    return (
        <div className="flex bottom-0 z-20 w-full bg-dark-1 px-6 py-3 items-center justify-evenly md:hidden">
            {sideLinks?.map((link) => {
                const isActive = pathname === link.route
                return (
                    // <Link key={link.label} href={link.route} className={`flex gap-2 items-center rounded-lg py-2 px-4 ${isActive && 'bg-amber-400'}`}>{link.icon} <p className="text-small-medium text-white bg-purple-700 max-sm:hidden">{link.label}</p></Link>
                    <Link key={link.label} href={link.route} className={`flex gap-4 justify-start shadow-lg shadow-rose-400 bg-purple-600 rounded-lg py-2 px-4 ${isActive && 'bg-amber-400 shadow-xl shadow-rose-400 animate-bounce border-b-4'}`}>{link.icon} <p className="text-gray-200">{link.label}</p></Link>
                )
            })}

        </div>
    )
}

export default BottomBar
