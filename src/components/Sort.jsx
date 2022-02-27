import React from 'react'
import { useDeezer } from '../context/DeezerContext'

export default function Sort() {

    const { sort, handleSort } = useDeezer()

    return (
        <div className="flex justify-center">
            <select
                onChange={({ target }) => handleSort(target.value)}
                value={sort}
                className="form-select appearance-none px-3 py-1.5 focus:ring-2 ring-indigo-400 ring-opacity-50 text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-900  border border-solid border-gray-300 duration-100 outline-none"
            >
                <option value='by'>Sort By</option>
                <option value='desc'>Duration &#8595;</option>
                <option value='asc'>Duration &#8593;</option>
                <option value='title_desc'>Title &#8595;</option>
                <option value='title_asc'>Title  &#8593;</option>
            </select>
        </div>
    )
}
