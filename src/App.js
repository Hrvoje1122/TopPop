import React from 'react'

import Header from './components/Header'
import { useDeezer } from './context/DeezerContext'
import Item from './components/Item'
import Sort from './components/Sort'
import Loading from './components/Loading'

export default function App() {

  const { tracks, search } = useDeezer()


  if (!tracks) return <></>


  return (
    <div className='dark:bg-gray-900 min-h-screen'>
      <div className='container mx-auto px-2 md:px-0'>
        <Header />

        <div className='my-3 flex w-full items-center justify-between'>
          <h3 className='text-lg lg:text-xl dark:text-gray-200 font-semibold' >Most Popular Tracks</h3>
          <Sort />
        </div>
        <div className='lg:px-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 md:gap-10 mt-5'>
          {
            tracks.length
              ? tracks.map(track => (<Item key={track.id} track={track} />))
              : <div className='col-span-4 flex items-center justify-center space-x-3'>
                <div className="pt-10 pb-16 sm:pt-24 sm:pb-36 lg:pt-40 lg:pb-56 text-center">
                  {
                    search ?
                      <>
                        <svg width="96" height="96" fill="none" className="mx-auto mb-6 text-gray-700 dark:text-gray-200"><path d="M36 28.024A18.05 18.05 0 0025.022 39M59.999 28.024A18.05 18.05 0 0170.975 39" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path><ellipse cx="37.5" cy="43.5" rx="4.5" ry="7.5" fill="currentColor"></ellipse><ellipse cx="58.5" cy="43.5" rx="4.5" ry="7.5" fill="currentColor"></ellipse><path d="M24.673 75.42a9.003 9.003 0 008.879 5.563m-8.88-5.562A8.973 8.973 0 0124 72c0-7.97 9-18 9-18s9 10.03 9 18a9 9 0 01-8.448 8.983m-8.88-5.562C16.919 68.817 12 58.983 12 48c0-19.882 16.118-36 36-36s36 16.118 36 36-16.118 36-36 36a35.877 35.877 0 01-14.448-3.017" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path><path d="M41.997 71.75A14.94 14.94 0 0148 70.5c2.399 0 4.658.56 6.661 1.556a3 3 0 003.999-4.066 12 12 0 00-10.662-6.49 11.955 11.955 0 00-7.974 3.032c1.11 2.37 1.917 4.876 1.972 7.217z" fill="currentColor"></path></svg>
                        <p className="text-lg leading-5 font-medium text-gray-700 dark:text-gray-200 mb-3">
                          Sorry! There are no Tracks for "{search.length > 10 ? search.substring(0, 10) + '...' : search}"
                        </p>
                      </>
                      : <Loading />
                  }
                </div>
              </div>

          }
        </div>
      </div>
    </div>
  )
}
