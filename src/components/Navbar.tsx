import React from 'react'
import { ThemeSwitcher } from './ThemeSwitcher'

type Props = {}

const Navbar = (props: Props) => {
  return (
    <nav className='flex justify-between h-14 items-center'>
      <h1 className='font-bold text-2xl'>amit.DEV</h1>
      <ul className='flex justify-between w-3/12 items-center'>
        <li className='cursor-pointer'><ThemeSwitcher /></li>
        <li className='cursor-pointer'>Home</li>
        <li className='cursor-pointer'>Projects</li>
        <li className='cursor-pointer'>Blogs</li>
        <li className='cursor-pointer'>Contact</li>
      </ul>
    </nav>
  )
}

export default Navbar