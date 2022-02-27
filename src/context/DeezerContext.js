import { createContext, useContext, useState, useEffect } from "react";
import fetchJsonp from 'fetch-jsonp'


const DeezerContext = createContext([])


export const DeezerProvider = ({ children }) => {

    const URL = 'https://api.deezer.com/chart&output=jsonp'
    const [tracks, setTracks] = useState([])

    const [searchTracks, setSearchTracks] = useState([])

    const [search, setSearch] = useState('')
    const [sort, setSort] = useState('')

    useEffect(() => {
        const getTracks = async () => {
            fetchJsonp(URL)
                .then(res => res.json())
                .then(data => {
                    setTracks(data.tracks.data)
                    setSearchTracks(data.tracks.data)
                })
                .catch(err => console.log(err))
        }

        getTracks()
    }, [])


    useEffect(() => {
        if (!search) return setSearchTracks(tracks)

        search.toLowerCase()
        const list = tracks.filter(track => track.title.toLowerCase().includes(search))

        setSearchTracks(list)

    }, [search, tracks])

    const handleSort = (value) => {
        setSort(value)

        let list = []

        if (value === 'by')
            return

        if (value === 'desc')
            list = tracks.sort((a, b) => a.duration - b.duration)

        if (value === 'asc')
            list = tracks.sort((a, b) => b.duration - a.duration)

        if (value === 'title_desc')
            list = tracks.sort((a, b) => a.title.localeCompare(b.title))

        if (value === 'title_asc')
            list = tracks.sort((a, b) => b.title.localeCompare(a.title))


        setSearchTracks(list)
    }

    return (
        <DeezerContext.Provider
            value={{
                tracks: searchTracks,
                search, setSearch,
                sort, handleSort
            }}
        >
            {children}
        </DeezerContext.Provider>
    )
}


export const useDeezer = () => {
    return useContext(DeezerContext)
}