'use client'

import { Typewriter, Cursor } from 'react-simple-typewriter'
import Switch from 'react-switch'
import { BsFillSunFill, BsFillMoonStarsFill } from 'react-icons/bs'
import { Chakra_Petch } from 'next/font/google'
import { useTheme } from 'next-themes'

const chakra = Chakra_Petch({ subsets: ['latin'], weight: '600' })

export default function Header() {
    const {theme, setTheme} = useTheme();

    return(
        <header className={`flex justify-between items-center py-3 px-20 bg-[var(--bg-light-secondary)] dark:bg-[var(--bg-dark-secondary)] text-5xl font-bold sticky top-0 z-20 ${chakra.className}`}
            style={{boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.4)'}}
        >
            <a href="#banner" className={`${theme === 'dark' ? 'dark-text-gradient' : 'text-gradient'}`}>
                <Typewriter words={['Dev Frontend', 'Paulo Turino']} loop={3} />
                <Cursor />
            </a>
            <nav className='text-2xl flex gap-16 absolute right-1/4 self-end'>
                <a href="#about" className={`${theme === 'dark' ? 'dark-text-gradient hover-border-animation-dark' : 'text-gradient hover-border-animation'}`}>Sobre</a>
                <a href="#portfolio" className={`${theme === 'dark' ? 'dark-text-gradient hover-border-animation-dark' : 'text-gradient hover-border-animation'}`}>Portfólio</a>
                <a href="#history" className={`${theme === 'dark' ? 'dark-text-gradient hover-border-animation-dark' : 'text-gradient hover-border-animation'}`}>História</a>
            </nav>
            <Switch 
                onChange={() => setTheme(theme === 'dark' ? 'light' : 'dark')} 
                checked={theme === 'dark' ? true : false} 
                checkedIcon={<BsFillSunFill className='text-3xl ml-1 pt-1 text-[var(--primary-dark)]' />}
                uncheckedIcon={<BsFillMoonStarsFill className='text-3xl ml-1 pt-1 text-[var(--secondary-dark)]' />}
                width={75}
                height={35}
                onColor='#249fdd'
                offColor='#032434'
            />
        </header>
    )
}