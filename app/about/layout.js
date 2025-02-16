import Link from 'next/link'
import React from 'react'

export default function Aboutlayout({children}) {
  return (
    <div>
        <nav className='mt-5 mb-5'>
          <ul>
            <li> <Link prefetch={false} href="/about/mission">Mission</Link> </li>
            <li> <Link prefetch={false} href="/about/vision">Vission</Link> </li>
          </ul>
        </nav>
        {children}
    </div>
  )
}
