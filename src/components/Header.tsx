import { cssImage, htmlImage, jsImage, nextImage, profileImage, reactImage, tsImage } from '@/constants/imageConstants'
import Image from 'next/image'
import React from 'react'

type Props = {}

const Header = (props: Props) => {
    return (
        <div className="container grid place-items-center mt-20">
            <div className='sm:w-full md:w-6/12 flex items-center justify-between mb-10'>
                <div className='w-5/12'>
                    <h1 className='font-bold text-2xl'>A Front-End Developer</h1>
                    <p className='font-small text-gray-500'>Hi, I'm Amit sharma. A passionate Developer mainly on Front-End but also work on backend.</p>
                </div>
                <div className='w-4/12'>
                    <Image className='rounded object-cover ml-auto' src={profileImage} width={200} height={200} alt='profile-image' />
                </div>
            </div>

            <div className='sm:w-full md:w-6/12 flex sm:flex-col md:flex-row justify-between items-center'>
                <span className='text-xl font-bold'>Skilled in |</span>
                <ul className='flex justify-between w-6/12'>
                    <li className='cursor-pointer' title='HTML5'><Image src={htmlImage} alt='html' width={50} height={50} /></li>
                    <li className='cursor-pointer' title='CSS3'><Image src={cssImage} alt='css' width={50} height={50} /></li>
                    <li className='cursor-pointer' title='Javascript'><Image src={jsImage} alt='javascript' width={50} height={50} /></li>
                    <li className='cursor-pointer' title='Typescript'><Image src={tsImage} alt='typescript' width={50} height={50} /></li>
                    <li className='cursor-pointer' title='ReactJS'><Image src={reactImage} alt='reactjs' width={50} height={50} /></li>
                    <li className='cursor-pointer' title='NextJS'><Image src={nextImage} alt='nextjs' width={50} height={50} /></li>
                </ul>
            </div>
        </div>
    )
}

export default Header