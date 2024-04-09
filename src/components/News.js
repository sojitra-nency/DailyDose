import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
  render() {
    return (
      <div className="container my-3">
        <h2> DailyDose - Top Headlines</h2>
        <div className="row">
            <div className="col-md-4 my-2">
                <NewsItem title="First News" description="News Description"/>
            </div>
            <div className="col-md-4 my-2">
                <NewsItem title="First News" description="News Description"/>
            </div>
            <div className="col-md-4 my-2">
                <NewsItem title="First News" description="News Description"/>
            </div>
        </div>    
        
      </div>
    )
  }
}

export default News
