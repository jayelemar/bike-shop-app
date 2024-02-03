'use client'

import Link from "next/link"
import { usePathname } from "next/navigation"
import { FC } from "react"

type NavProps = {
  containerStyles: string,
}

const links = [ 
  { name: 'Home', path: '/' },
  { name: 'Our Bikes', path: '/our-bikes' },
]

const Nav:FC<NavProps> = ({ containerStyles }) => {
  const pathname = usePathname();

  return (
    <div className={`${containerStyles}`}>
      { links.map((link, index) => {
        return (
          <Link 
            href={ link.path } 
            key={index}
            className={`${link.path === pathname && 'text-accent'}`}
          >
            { link.name }
          </Link>
        )
      })}
    </div>
  )
}

export default Nav