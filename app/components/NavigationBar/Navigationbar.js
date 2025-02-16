'use client'
import { Button } from 'keep-react'
import Link from 'next/link'
import { DotsThree, XCircle } from 'phosphor-react'
import React, { useRef } from 'react'
import {
    Dropdown,
    DropdownAction,
    DropdownArrow,
    DropdownContent,
    DropdownDivider,
    DropdownItem,
} from 'keep-react'
import "./style.css"
export default function Navigationbar() {
    const navRef = useRef();
    const showNavBar = () => {
        navRef.current.classList.toggle('responsive_nav')
    }
    return (
        <div>
            <header>
                <h1>Logo</h1>
                <nav className='flex gap-5 items-center' ref={navRef}>

                    <div className='bigAvater h-[150px] w-[150px] rounded-full border border-white'></div>
                    <span><Link prefetch={false} href='/'>Home</Link></span>
                    <span><Link prefetch={false} href='/about'>About</Link></span>
                    <span><Link prefetch={false} href='/blog'>Blog</Link></span>
                    <Dropdown>
                        <DropdownAction asChild>
                            <div className='smallAvater h-[50px] w-[50px] rounded-full border border-white'></div>
                        </DropdownAction>
                        <DropdownContent>
                            <DropdownArrow />
                            <DropdownItem>Contacts</DropdownItem>
                            <DropdownItem>Phone</DropdownItem>
                            <DropdownItem>Statistics</DropdownItem>
                            <DropdownDivider />
                            <DropdownItem>Rename</DropdownItem>
                            <DropdownItem>Duplicate</DropdownItem>
                            <DropdownDivider />
                            <DropdownItem>Account</DropdownItem>
                            <DropdownItem>Logout</DropdownItem>
                        </DropdownContent>
                    </Dropdown>
                    <button className='logoutBtn'>Logout</button>

                    <button className='nav-btn nav-close-btn' onClick={showNavBar}>
                        <XCircle size={32} color="#f5f5f5" />
                    </button>

                </nav>

                <button className='nav-btn' onClick={showNavBar}><DotsThree size={32} color="#f5f5f5" /></button>

            </header>
        </div >
    )
}
