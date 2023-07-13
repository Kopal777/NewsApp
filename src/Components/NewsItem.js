import React, { Component } from 'react'

export class newsItem extends Component {
    render() {
        let {title, description, imageUrl, newsUrl, source, author, publishedAt} = this.props;
        return (
            <div>
                <div className="card" style={{width: "18rem"}}>
                    <img src={imageUrl} className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">{title}</h5>
                            <span className="badge text-bg-danger">{source}</span>
                            <p className="card-text">{description}...</p>
                            <p className="card-text"><small className="text-muted">{author?author:"Unknown"} published on {new Date(publishedAt).toGMTString()}.</small></p>
                            <a href={newsUrl} className="btn btn-dark">Read More</a>
                        </div>
                </div>
            </div>
        )
    }
}

export default newsItem
