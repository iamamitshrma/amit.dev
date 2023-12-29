import Image from 'next/image'
import React from 'react'

type Props = {}

const Header = (props: Props) => {
    return (
        <section className="h-96 grid place-items-center">
            <div className='flex'>
                <div>
                    <h1>A Front-End Developer</h1>
                    <p>Hi, I'm Amit sharma. A passionate Developer mainly on Front-End but also work on backend.</p>
                </div>
                <div>
                    <Image src="" alt='profile-image' />
                </div>
            </div>

            <div className='flex justify-between'>
                <span>Skilled in |</span>
                <ul className='flex'>
                    <li><Image src="" alt='tech' /></li>
                    <li><Image src="" alt='tech' /></li>
                    <li><Image src="" alt='tech' /></li>
                    <li><Image src="" alt='tech' /></li>
                    <li><Image src="" alt='tech' /></li>
                    <li><Image src="" alt='tech' /></li>
                    <li><Image src="" alt='tech' /></li>
                </ul>
            </div>
        </section>
    )
}

export default Header