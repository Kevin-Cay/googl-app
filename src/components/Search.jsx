import React, {useEffect, useState} from 'react'
import {useDebounce} from 'use-debounce'

//superman
import { useResultContext } from '../context/ResultContextProvider'
import { Links } from './Links'

export const Search = () => {
    const [text, setText] = useState('');
    const {setSearchTerm} = useResultContext();
    const [debouncedValue] = useDebounce(text, 700);


    useEffect(() => {
        if(debouncedValue) setSearchTerm(debouncedValue)
    }, [debouncedValue]);

    return (
        <div className='realite sm:ml-48 md:ml-72 sm:-mt-10 mt-3' >
            <input 
            value={text}
            type="text" 
            className='sm:w-96 w-80 h-10 dark:bg-gray-200 border rounded-full shadow-sm outline-none p-6 text-black hover:shadow-lg '
            onChange={(e) => setText(e.target.value)}
            />
            {!text && (
                <button 
                onClick={()=>setText('')}
                type='button' 
                className='absolute top-1.5 right-4 text-2xl text-gray-500 dark:text-gray-200 ' >
                    X
                </button>
            )}
            <Links />
        </div>
    )
}
