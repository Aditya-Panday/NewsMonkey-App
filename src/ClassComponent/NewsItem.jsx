import React, { Component } from 'react'

export default class NewsItem extends Component {
    render() {
        return (
            <div className=' col-lg-3 col-md-4 col-sm-6 col-12'>
                <div className="card my-2 jamura">
                    {/* condition di gyi hai agar koi img available nhi content mai toh waha pr no-image wali pic show hogi */}
                    <img src={this.props.pic?this.props.pic:"/public/images/cool-background.png"} height="160px" className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title"><strong>{this.props.title}</strong></h5>
                        <div className='d-flex justify-content-between source'>
                            <p>{this.props.source}</p>
                            <p>{this.props.date}</p>
                        </div>
                        <hr />
                        <p className="card-text">{this.props.description}</p>
                        <a href={this.props.url} target='_blank' rel="noreferrer" className="btn btn-secondary w-100 btn-sm">Read Full Article</a>
                    </div>
                </div>
            </div>
        )
    }
}
