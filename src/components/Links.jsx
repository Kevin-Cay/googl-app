import React from 'react'
import { NavLink } from 'react-router-dom'

const links_=[
    { url: '/search', text: '🔍 All'    },
    { url: '/news', text: '📄 News'    },
    { url: '/images', text: '📷 Images'    },
    { url: '/videos', text: '📹 Videos'}
]

export const Links = () => {
    return (
        <div className='flex sm:justify-around justify-between items-center mt-4' >
             {links_.map(({url, text})=>(
                 <NavLink to={url} className='mr-2 dark:text-gray-300'  activeClassName='text-blue-700 border-b-2 dark:text-blue-300 border-blue-700 pb-2 ' >
                     {text}
                 </NavLink>    
             ))}
        </div>
    )
}
