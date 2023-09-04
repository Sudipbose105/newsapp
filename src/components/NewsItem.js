import React from 'react'

const NewsItem=(props)=>{
    return (
       <div className="my-3">
         <div className="card">
          <div style={{display:'flex',justifyContent:'flex-end',position:'absolute',right:'0'}}>
            <span className="badge rounded-pill bg-success">{props.source}</span>
          </div>
            <img src={props.imageUrl} className="card-img-top" alt="..."/>
            <div className="card-body">
              <h5 className="card-title">{props.title}</h5>
              <p className="card-text">{props.description}...</p>
              <p className="card-text"><small className="text-body-success text-success"><strong>By {props.author?props.author:"Unknown"} on {new Date(props.date).toLocaleString()}</strong></small></p>
              <a href={props.newsUrl} target='_blank' rel="noreferrer" className="btn btn-sm btn-dark">Read More</a>
            </div>
      </div>
       </div>
    )
}

export default NewsItem;
