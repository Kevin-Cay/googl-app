import React from 'react'


export const ImageResult = ({ href, title, image}, key) => {
    return (
        <article key={key} class='mr-2 rounded shadow-md bg-white dark:bg-black mt-1 ' >
            <a href={href} className='sm:p-3 p-5'  target='_blank' rel='noreferrer' >
                        <img src={image?.src} alt={title} loading='lazy' className='w-full max-h-40  ' />
                        <p className='w-36 break-words text-sm mt-2 dark:bg-black dark:text-gray-200 ' >
                            {title}
                        </p>
            </a>
        </article>
    )
}
