import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
// impt - import prop types
import PropTypes from 'prop-types'


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
    
    constructor(){
        super();
        // console.log("Hello from News Component");
        this.state = {
            articles: [],
            loading: false,
            page: 1
        }
    }

    async componentDidMount(){
        // let url = `https://newsapi.org/v2/top-headlines?apiKey=803d58f3059445539c08249a7a68fcae&q=cricket&page=1&pageSize=${this.props.pageSize}`;   
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=803d58f3059445539c08249a7a68fcae&page=1&pageSize=${this.props.pageSize}` 
        this.setState({loading: true})
        let data = await fetch(url);
        let parsedData = await data.json();
        console.log(parsedData);
        this.setState({
            articles: parsedData.articles, 
            totalResults: parsedData.totalResults,
            loading: false
        })
    }

    handlePrevClick = async ()=>{
        // let url = `https://newsapi.org/v2/top-headlines?apiKey=803d58f3059445539c08249a7a68fcae&q=cricket&page=${this.state.page-1}&pageSize=${this.props.pageSize}`;
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=803d58f3059445539c08249a7a68fcae&page=1&pageSize=${this.props.pageSize}` 
        this.setState({loading: true})
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({loading: false})
        // console.log(parsedData);
        this.setState({
            page: this.state.page-1,
            articles: parsedData.articles
        })
    }

    handleNextClick = async ()=>{
        // let url = `https://newsapi.org/v2/top-headlines?apiKey=803d58f3059445539c08249a7a68fcae&q=cricket&page=${this.state.page+1}&pageSize=${this.props.pageSize}`;
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=803d58f3059445539c08249a7a68fcae&page=1&pageSize=${this.props.pageSize}` 
        this.setState({loading: true})
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({loading: false})
        // console.log(parsedData);
        this.setState({
            page: this.state.page+1,
            articles: parsedData.articles
        })
        
    }

  render() {
    
    return (
      <div className="container my-3 text-center">
        <h2 className="text-center" style={{margin: "35px 0px"}}> DailyDose - Top Headlines</h2>
        {this.state.loading && <Spinner/>}
        <div className="row">
        {!this.state.loading && this.state.articles.map((element)=>{
            return <div className="col-md-4" key={element.url}>
                <NewsItem title={element.title?element.title.slice(0,45):""} description={element.description?element.description.slice(0,95):""} imageUrl={element.urlToImage} newsUrl={element.url}/>
                </div>
        })}   
        </div>    
        <div className="container d-flex justify-content-between">
            <button disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.handlePrevClick}>&larr; Previous</button>
            <button disabled={this.state.page+1>Math.ceil(this.state.totalResults/this.props.pageSize)} type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
        </div>
      </div>
    )
  }
}

export default News
