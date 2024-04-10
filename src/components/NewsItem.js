import React, { Component } from 'react'
import {Link} from 'react-router-dom';

export class NewsItem extends Component {
  render() {
    let {title, description, imageUrl, newsUrl, author, date, source} = this.props; 
    return (
      <div>
        <div className="card">
          <div style = {{display: "flex", justifyContent: "flex-end"}}> 
            <span className="position-absolute top-0 badge rounded-pill bg-danger" style={{right: "0%", zIndex: "1"}}> {source} </span>
          </div>
          <img src={imageUrl?imageUrl:"https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1099495_800x450.jpg"} className="card-img-top" alt="..." style={{height:"250px", width:"450"}}/>
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{description}...</p>
            <p className="card-text"><small className="text-muted">By {author} on {new Date(date).toGMTString()}</small></p>
            <Link to={newsUrl} className="btn btn-dark btn-sm">Read More</Link>
          </div>
          
        </div>
      </div>
    )
  }
}

export default NewsItem
