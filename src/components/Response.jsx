import React, {useEffect} from 'react'
import {useLocation} from 'react-router-dom'
import ReactPlayer from 'react-player'
import { Loading } from './Loading'
import { LinkResult } from './LinkResult'

import {useResultContext} from '../context/ResultContextProvider'
import { ImageResult } from './ImageResult'
import { NewsResult } from './NewsResult'

export const Response = () => {
    const {getResults, results, searchTerm,  isLoading } = useResultContext();
    const location = useLocation();

    useEffect(() => {
        if(searchTerm){
            if(location.pathname === '/videos'){
                getResults(`/search/q=${searchTerm} videos`)
            }else{
                getResults(`${location.pathname}/q=${searchTerm}-en&num=25`)
            }
        }
       
    }, [searchTerm, location.pathname]);

    if(isLoading) return <Loading />

    switch(location.pathname){
        case'/search':
        return(
            <div className="flex flex-wrap justify-between space-y-6 sm:px-15 ">
                {results?.map(({link, title, description}, index) =>(
                    <LinkResult 
                    key={index} 
                    link={link} 
                    title={title} 
                    description={description? description : '' } />
                ))}
            </div>
        ) 
        case'/images':
        return (
            <div className="flex flex-wrap items-start  sm:px-15 ">
                {results?.map(({image, link:{href, title}}, index) => (
                    <ImageResult 
                    key={index} 
                    href={href}
                    title={title}
                    image={image}     
                    />
                ))}
            </div>
        )
        case'/news':
        return (
            <div className="flex flex-wrap justify-between space-y-6 sm:px-36 items-center ">
                {results?.map(({id, source, links, title}) =>(
                   <NewsResult 
                   key={id}
                   links={links}
                   title={title}
                   source={source}
                   />
                ))}
            </div>
        )
        case'/videos':
        return (
            <div className='flex flex-wrap justify-center ' >
                {results.map((video, index)=>(
                    <div key={index} className="p-2">
                        { video?.additional_links?.[0]?.href && <ReactPlayer url={video.additional_links[0].href} controls width='355px' height='200px'  />}
                    </div>
                ))}
            </div>
        )
        default:
            return 'ERROR!'
    }
}
