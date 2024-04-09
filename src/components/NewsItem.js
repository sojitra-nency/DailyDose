import React, { Component } from 'react'
import {Link} from 'react-router-dom';

export class NewsItem extends Component {
  render() {
    let {title, description, imageUrl, newsUrl} = this.props; 
    return (
      <div>
        <div className="card">
          <img src={imageUrl?imageUrl:"https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1099495_800x450.jpg"} className="card-img-top" alt="..."/>
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{description}...</p>
            <Link to={newsUrl} className="btn btn-dark btn-sm">Read More</Link>
          </div>
        </div>
      </div>
    )
  }
}

export default NewsItem
