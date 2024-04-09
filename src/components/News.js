import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
    
    constructor(){
        super();
        console.log("Hello from News Component");
        this.state = {
            articles: [],
            loading: false
        }
    }

    async componentDidMount(){
        let url = "https://newsapi.org/v2/top-headlines?apiKey=803d58f3059445539c08249a7a68fcae&q=cricket";    
        let data = await fetch(url);
        let parsedData = await data.json();
        console.log(parsedData);
        this.setState({articles: parsedData.articles})
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
        
      </div>
    )
  }
}

export default News
