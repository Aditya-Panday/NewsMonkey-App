import React, { useEffect, useState } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component'
// npm install --save react-infinite-scroll-component
import NewsItem from './NewsItem'

export default function Home(props) {
    let [totalResults, setTotalresults] = useState(0)
    let [articles, setArticles] = useState([])
    let [page, setPage] = useState(1)
    let [q, setQ] = useState("")

    // ek async function apni body ke andar wait kr skta hai kuch promises ke resolve hone ka...
    // ye async hona chaiye kyoki promise ke thru data milega
    async function getAPIData(q) {

        setPage(1)
        setQ(q)
        
        // refresh na krna pade uske liye componentdidupdate use krna padega or ye call bhi usi mai hoga..
        var response = await fetch(`https://newsapi.org/v2/everything?q=${q}&page=${page}&pageSize=12&language=${props.language}&sortBy=publishedAt&apiKey=60fda53fa3be4e0aa5fe743389c1067d`)
        response = await response.json()
        // aab data update ho jayga articles or total results mai then ye re render ho jayga
        if (response.articles) {
            setTotalresults(response.totalResults)
            setArticles(response.articles)
            
        }
    }
    
    //ye loader ke liye banaya hai
    let fetchData = async () => {
        
        
        setPage(page + 1)
        var response = await fetch(`https://newsapi.org/v2/everything?q=${q}&page=${page}&pageSize=12&language=${props.language}&sortBy=publishedAt&apiKey=60fda53fa3be4e0aa5fe743389c1067d`)
        // Another api     1405e002a9234fdf99ac01be59f4d78e
        // Another Api     60fda53fa3be4e0aa5fe743389c1067d
        response = await response.json()    //proper javascript mai code mil jayga
        
        if (response.articles) {
            setArticles(articles.concat(response.articles.filter((x) => x.title !== "[Removed]")))

        }
    }

    useEffect(() => {
        if (props.search === "")
            getAPIData(props.q)
        
        else
            getAPIData(props.search)
    }, [props])

    return (
        <>
            <div className="container-fluid my-3">
                <h4 className='bg-secondary text-center text-light p-2'>{props.q} News Items</h4>
                <InfiniteScroll
                    className='infinite'
                    dataLength={articles.length}
                    next={fetchData}
                    //articles ki length jab tk total result se kam hai tab tk chalega
                    hasMore={articles.length < totalResults}
                    // spinner get from bootstrap
                    loader={
                        <div className='text-center py-5'>
                            <div className="spinner-border text-info" role="status">
                                <span className="visually-hidden">Loading...</span>
                            </div>
                        </div>
                    }
                    endMessage={
                        <p style={{ textAlign: 'center' }}>
                            <b>No More News Articles...</b>
                        </p>
                    }
                >
                    <div className="row">
                        {
                            articles.map((item, index) => {
                                return <NewsItem
                                    key={index}
                                    title={item.title}
                                    description={item.description}
                                    source={item.source.name}
                                    url={item.url}
                                    pic={item.urlToImage}
                                    date={(new Date(item.publishedAt)).toLocaleDateString()}
                                />
                            })
                        }
                    </div>
                </InfiniteScroll>
            </div>
        </>
    )
}

