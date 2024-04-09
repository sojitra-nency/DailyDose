import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
    
    constructor(){
        super();
        // console.log("Hello from News Component");
        this.state = {
            articles: [],
            loading: false,
            page: 1
        }
    }

    // Modify pagesize to cahnge the number of cards shown on the page and also change the if concition where total results are divided by pagesize
    async componentDidMount(){
        let url = "https://newsapi.org/v2/top-headlines?apiKey=803d58f3059445539c08249a7a68fcae&q=cricket&page=1&pageSize=1";    
        let data = await fetch(url);
        let parsedData = await data.json();
        console.log(parsedData);
        this.setState({articles: parsedData.articles, totalResults: parsedData.totalResults})
    }

    handlePrevClick = async ()=>{
        let url = `https://newsapi.org/v2/top-headlines?apiKey=803d58f3059445539c08249a7a68fcae&q=cricket&page=${this.state.page-1}&pageSize=1`;
        let data = await fetch(url);
        let parsedData = await data.json();
        // console.log(parsedData);
        this.setState({
            page: this.state.page-1,
            articles: parsedData.articles
        })
    }

    handleNextClick = async ()=>{
        if(this.state.page+1>Math.ceil(this.state.totalResults/1)){
            // No more pages left
        }
        else{
            let url = `https://newsapi.org/v2/top-headlines?apiKey=803d58f3059445539c08249a7a68fcae&q=cricket&page=${this.state.page+1}&pageSize=1`;
            let data = await fetch(url);
            let parsedData = await data.json();
            // console.log(parsedData);
            this.setState({
                page: this.state.page+1,
                articles: parsedData.articles
            })
        }
    }

  render() {
    
    return (
      <div className="container my-3">
        <h2> DailyDose - Top Headlines</h2>
        <div className="row">
        {this.state.articles.map((element)=>{
            return <div className="col-md-4 mx-2 my-2" key={element.url}>
                <NewsItem title={element.title?element.title.slice(0,45):""} description={element.description?element.description.slice(0,95):""} imageUrl={element.urlToImage} newsUrl={element.url}/>
                </div>
        })}   
        </div>    
        <div className="container d-flex justify-content-between">
            <button disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.handlePrevClick}>&larr; Previous</button>
            <button type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
        </div>
      </div>
    )
  }
}

export default News
