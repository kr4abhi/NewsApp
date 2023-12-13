import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types';

export class News extends Component {
    static defaultProps ={
        country: 'in',
        pageSize: 8,
        category: 'general'
    }

    static propTypes = {
        country: PropTypes.string,
        pageSize: PropTypes.number,
        category: PropTypes.string
    }
    
    constructor(){
        super();
        // console.log("constr")
        this.state ={
            articles: [],
            loading: false,
            page: 1
        }
    }
    async updateNews(){
        const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=c871888a8050499b987c7a719e64e335&page=${this.state.page}&pageSize=${this.props.pageSize}`;
        this.setState({loading: true});
        let data = await fetch(url);
        let parsedData = await data.json();
        // console.log(parsedData);

        this.setState({
            articles: parsedData.articles,
            totalResults: parsedData.totalResults,
            loading: false
        })
    }

    async componentDidMount(){
        // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=c871888a8050499b987c7a719e64e335&page=1&pageSize=${this.props.pageSize}`;
        // this.setState({loading: true});
        // let data = await fetch(url);
        // let parsedData = await data.json();
        // // console.log(parsedData);

        // this.setState({
        //     articles: parsedData.articles,
        //     totalResults: parsedData.totalResults,
        //     loading: false
        // })
        this.updateNews();
    }

    handleNextClick = async ()=>{
        // console.log("nxt")
    //     if (this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)) {
    //     }
    //     else{
    //     let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=c871888a8050499b987c7a719e64e335&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
    //     this.setState({loading: true});
    //     let data = await fetch(url);
    //     let parsedData = await data.json();
    //     // console.log(parsedData);

    //     this.setState({
    //         page: this.state.page + 1,
    //         articles: parsedData.articles,
    //        loading: false
    //     })
    // }
    this.setState({
        page: this.state.page+1
    })
    this.updateNews();
    }
    handlePrevClick = async ()=>{
        // console.log("pre")
        // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=c871888a8050499b987c7a719e64e335&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
        // this.setState({loading: true});
        // let data = await fetch(url);
        // let parsedData = await data.json();
        // console.log(parsedData);

        // this.setState({
        //     page: this.state.page - 1,
        //     articles: parsedData.articles,
        //     loading: false
        // })
        this.setState({
            page: this.state.page-1
        })
        this.updateNews();
    }

  render() {
    return (
        <>
        <div className="container my-3">
        <h2 className='text-center'>Headlines</h2>
        {this.state.loading && <Spinner/>}
        
        <div className="row">
        {!this.state.loading && this.state.articles.map((element)=>{
            return <div className="col-md-4" key={element.url}>
            <NewsItem title={element.title?element.title.slice(0, 35):""} description={element.description?element.description.slice(0, 90):""} imageUrl={element.urlToImage} newsUrl={element.url} author = {element.author} date = {element.publishedAt} source = {element.source.name}/>
        </div>
        })}
        <div>
            <div className='container d-flex justify-content-between'>
            <button disabled ={this.state.page<=1} type='button' className='btn btn-dark' onClick={this.handlePrevClick}>
            &larr; prev
            </button>
            <button disabled ={this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)} type='button' className='btn btn-dark' onClick={this.handleNextClick}>
            next &rarr;
            </button>
            </div>
        </div>
          
            
            
            
        </div>
        </div>
        </>
      
    )
  }
}

export default News