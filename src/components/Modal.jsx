import React from 'react'
import moment from 'moment'



export default function Modal({ track, setShow }) {
    return (
        <div className='fixed z-10 w-full h-full flex items-center justify-center top-0 left-0 bg-black bg-opacity-60'>
            <div className={`w-11/12 md:w-96 p-4 flex flex-col space-y-4 bg-white dark:bg-gray-800 rounded-md shadow`}>
                <div className='flex items-center justify-between'>
                    <span className='text-base sm:text-lg font-semibold text-indigo-400'>{track.title}</span>
                    <button onClick={() => setShow(null)} className='p-1 border dark:border-gray-700 duration-150 hover:ring-2 ring-opacity-75 ring-indigo-400 rounded ' >
                        <svg xmlns="http://www.w3.org/2000/svg" className="text-indigo-400 h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>
                <div className="dark:text-gray-200 text-sm md:text-base w-full flex flex-col space-y-4">
                    <div className='flex items-center justify-between' >
                        <span>Ordinal number on the list</span>
                        <span>{track.position}</span>
                    </div>
                    <div className='flex items-center justify-between' >
                        <span>Artist</span>
                        <span>{track.artist.name}</span>
                    </div>
                    <div className='flex items-center justify-between' >
                        <span>Duration</span>
                        <span>{moment.utc(track.duration * 1000).format('mm:ss')}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
