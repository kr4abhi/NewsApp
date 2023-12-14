import React, { useEffect, useState } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types';
import InfiniteScroll from 'react-infinite-scroll-component';

const News =(props)=> {
    const [articles, setArticle] = useState([]);
    const [loading, setLoading] = useState(true);
    const [page, setpage] = useState(1);
    const [totalResults, settotalResults] = useState(0);
    
    const updateNews = async()=>{
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
        // this.setState({loading: true});
        setLoading(true);
        let data = await fetch(url);
        let parsedData = await data.json();
        // console.log(parsedData);
        setArticle(parsedData.articles);
        settotalResults(parsedData.totalResults);
        setLoading(false);
        
    }
    useEffect(() => {
        updateNews(); 
        // eslint-disable-next-line
    }, [])
    
    const fetchMoreData = async ()=>{
        setpage(page+1);
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;

        setLoading(true);
        let data = await fetch(url);
        let parsedData = await data.json();
        
        setArticle(articles.concat(parsedData.articles));
        settotalResults(parsedData.totalResults);
        setLoading(false);
    }
        return (
        <>        
        <h2 className='text-center' style={{margin: '35px 90px', marginTop: '90px'}}>Headlines</h2>
        {loading && <Spinner/>}
        <InfiniteScroll 
            dataLength={articles.length}
            next={fetchMoreData} 
            hasMore={articles.length !== totalResults} 
            >
            <div className="container">
                <div className="row">
                        {articles.map((element)=>{
                        return <div className="col-md-4" key={element.url}>
                        <NewsItem title={element.title?element.title.slice(0, 35):""} description={element.description?element.description.slice(0, 90):""} imageUrl={element.urlToImage} newsUrl={element.url} author = {element.author} date = {element.publishedAt} source = {element.source.name}/>
                    </div>
                    })}
                </div>
            </div>
        </InfiniteScroll>
        
        
        </>
      
    )
  
}

News.defaultProps ={
    country: 'in',
    pageSize: 8,
    category: 'general'
}

News.propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string
}
export default News