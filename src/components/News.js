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
    
    constructor(props){
        super(props);
        // console.log("Hello from News Component");
        this.state = {
            articles: [],
            loading: false,
            page: 1
        }
        document.title = `DailyDose - ${this.props.category.charAt(0).toUpperCase() + this.props.category.slice(1)}`;
    }

    updateNews = async ()=>{
        // let url = `https://newsapi.org/v2/top-headlines?apiKey=803d58f3059445539c08249a7a68fcae&q=cricket&page=${this.state.page}&pageSize=${this.props.pageSize}`;
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=803d58f3059445539c08249a7a68fcae&page=${this.state.page}&pageSize=${this.props.pageSize}`
        this.setState({loading: true})
        let data = await fetch(url);
        let parsedData = await data.json();
        console.log(parsedData);
        this.setState({
            articles: parsedData.articles,
            loading: false
        })
    }

    async componentDidMount(){
        this.setState({page: 1});
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

  render() {
    
    return (
      <div className="container my-3 text-center">
        <h2 className="text-center" style={{margin: "35px 0px"}}> DailyDose - Top  {this.props.category.charAt(0).toUpperCase() + this.props.category.slice(1)} Headlines</h2>
        {this.state.loading && <Spinner/>}
        <div className="row">
        {!this.state.loading && this.state.articles.map((element)=>{
            return <div className="col-md-4 my-3" key={element.url}>
                <NewsItem title={element.title} description={element.description} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author?element.author:"Unknown"} date={element.publishedAt?element.publishedAt:"Unknown Date"} source={element.source.name}/>
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
