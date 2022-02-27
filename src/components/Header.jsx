import React, { useEffect, useState } from 'react'
import { useDeezer } from '../context/DeezerContext'

export default function Header() {

    const { search, setSearch } = useDeezer()

    const [dark, setDark] = useState(false)

    useEffect(() => {
        const html = document.getElementById('html')

        if (dark) html.classList.add('dark')
        else html.classList.remove('dark')

    }, [dark])


    return (
        <div className='h-14 border-b dark:border-gray-600 flex items-center justify-between space-x-5'>
            <div className='cursor-pointer flex items-center justify-start w-56 px-2 sm:px-0 h-full border-r dark:border-gray-600'>
                <img src={dark ? '/deezer_dark.png' : '/deezer.png'} alt='deezer logo' />
            </div>
            <input
                placeholder='Search'
                className='placeholder:text-gray-500 text-gray-700 dark:text-gray-200 dark:bg-transparent text-lg outline-none w-full h-10'
                value={search}
                onChange={({ target }) => setSearch(target.value)}
            />
            <div className='flex items-center space-x-2'>
                <svg xmlns="http://www.w3.org/2000/svg" className="text-yellow-500 h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
                <div
                    onClick={() => setDark(!dark)}
                    className='cursor-pointer border dark:border-gray-600 w-12 h-6 flex items-center p-1 rounded-full'
                >
                    <div className={`${dark ? 'translate-x-full bg-indigo-400' : 'translate-x-0 bg-gray-200'} duration-200 w-5 h-5 rounded-full`}>
                    </div>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" className="text-indigo-300  h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
            </div>
        </div>
    )
}
