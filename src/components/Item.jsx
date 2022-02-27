import React, { useState } from 'react'
import Modal from './Modal'

export default function Item({ track }) {

    const [show, setShow] = useState(null)


    return (
        <>
            <div onClick={() => setShow(track.id)} className='rounded-sm flex flex-col space-y-1 cursor-pointer'>
                <div className='relative flex justify-center'>
                    <img
                        src={`https://e-cdns-images.dzcdn.net/images/cover/${track.md5_image}/1080x1080-000000-80-0-0.jpg`}
                        alt={track.title}
                        className='rounded-sm w-11/12'
                    />
                    <div className='justify-end absolute top-0 w-11/12 opacity-0 hover:opacity-100 bg-opacity-0 hover:bg-opacity-30 duration-150 h-full bg-slate-300'>
                        <div className='w-full h-full flex space-x-3 items-end p-3'>
                            <span className='flex items-center justify-center w-6 h-6 sm:w-9 sm:h-9 bg-white rounded-full'>
                                <svg xmlns="http://www.w3.org/2000/svg" className="text-indigo-500 w-3 sm:w-5" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                                </svg>
                            </span>
                            <span className='flex items-center justify-center w-6 h-6 sm:w-9 sm:h-9 bg-white rounded-full'>
                                <svg xmlns="http://www.w3.org/2000/svg" className="text-indigo-500 w-3 sm:w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" />
                                </svg>
                            </span>
                        </div>
                    </div>
                </div>
                <div className='ml-3 flex flex-col text-gray-700 dark:text-gray-200'>
                    <span>{track.title}</span>
                    <span className='text-xs'>By {track.artist.name} </span>
                </div>
            </div>
            {
                show === track.id && <Modal setShow={setShow} track={track} />
            }
        </>
    )
}
