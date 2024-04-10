import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
// impt - import prop types
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";

export class News extends Component {
    static defaultProps = {
        country: 'in',
        pageSize: 9,
        category: 'general'
    }

    static propTypes = {
        country: PropTypes.string,
        pageSize: PropTypes.number,
        category: PropTypes.string
    }
    
    constructor(props){
        super(props);
       this.state = {
            articles: [],
            loading: true,
            totalResults: 0,
            page: 1
        }
        document.title = `DailyDose - ${this.props.category.charAt(0).toUpperCase() + this.props.category.slice(1)}`;
    }

    updateNews = async ()=>{
        this.props.setProgress(10);
        const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`
        this.setState({loading: true})
        let data = await fetch(url);
        this.props.setProgress(30);
        let parsedData = await data.json();
        this.props.setProgress(70);
        this.setState({
            articles: parsedData.articles,
            totalResults: parsedData.totalResults,
            loading: false
        })
        this.props.setProgress(100);
    }

    async componentDidMount(){
        this.updateNews();
    }

    handlePrevClick = async ()=>{
        this.setState({page: this.state.page-1});
        this.updateNews();
    }

    handleNextClick = async ()=>{
        this.setState({page: this.state.page+1});
        this.updateNews();
    }

    fetchMoreData = () => {
        this.setState({page: this.state.page+1});
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`  
        fetch(url)
        .then(response => response.json())
        .then(data => this.setState({articles: this.state.articles.concat(data.articles)}))
        .catch(err => console.log(err));

      };

  render() {
    
    return (
      <>
        <h2 className="text-center" style={{margin: "35px 0px"}}> DailyDose - Top  {this.props.category.charAt(0).toUpperCase() + this.props.category.slice(1)} Headlines</h2>
        {this.state.loading && <Spinner/>}
        
        <InfiniteScroll
            dataLength={this.state.articles.length}
            next={this.fetchMoreData}
            hasMore={this.state.articles.length !== this.state.totalResults}
            loader={<Spinner/>}
            >
            <div className="container">
                <div className="row">
                    {this.state.articles.map((element)=>{
                        return <div className="col-md-4 my-3" key={element.url}>
                            <NewsItem title={element.title?element.title.slice(0,45):""} description={element.description?element.description.slice(0,88):""} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author?element.author:"Unknown"} date={element.publishedAt?element.publishedAt:"Unknown Date"} source={element.source.name}/>
                            </div>
                    })}  
                </div>
            </div> 
        </InfiniteScroll> 
           
        {/* <div className="container d-flex justify-content-between">
            <button disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.handlePrevClick}>&larr; Previous</button>
            <button disabled={this.state.page+1>Math.ceil(this.state.totalResults/this.props.pageSize)} type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
        </div> */}
      </>
    )
  }
}

export default News
