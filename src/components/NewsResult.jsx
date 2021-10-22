import React from 'react'

export const NewsResult = ({links, key, source, title}) => {
    return (
        <div>
             <div key={key} className=' w-full text-left rounded-md shadow-sm hover:shadow-md p-1.5 border border-gray-400' >
                        <a href={links?.[0].href} target='_blank' rel='noreferrer' className='hover:underline' >
                            <p className="text-lg hover:underline dark:text-blue-300 text-blue-700">
                                {title} 
                            </p>
                        </a>
                            <div className="flex gap-4">
                                <a href={source?.href} target='_blank' rel='noreferrer' className=' text-green-500 dark:text-gray-500 hover:underline' >
                                    {source?.href}
                                </a>
                            </div>
                            
            </div>
        </div>
    )
}
