import React from 'react'

export const LinkResult = ({ title, link, description }, key) => {
    return (
            <div key={key} className=' w-full text-left rounded-md shadow-sm hover:shadow-md p-1.5' >
                        <a href={link} target='_blank' rel='noreferrer' >
                            <p className="text-s text-green-500 dark:text-gray-500">
                                {link.length>30? link.substring(0,30) : link}
                            </p>
                            <p className="text-lg hover:underline dark:text-blue-300 text-blue-700">
                                {title} 
                            </p>
                            <p className="text-md text-gray-700 dark:text-gray-50 ">
                                {description.length>175? description.substring(0,175):description }
                            </p>
                        </a>
            </div>
    )
}
