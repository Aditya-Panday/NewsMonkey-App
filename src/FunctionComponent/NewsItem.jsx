import React from 'react'

export default function NewsItem(props) {
    return (
        <div className=' col-lg-3 col-md-4 col-sm-6 col-12' >
            <div className="card my-2 jamura" data-aos="fade-in">
                {/* condition di gyi hai agar koi img available nhi content mai toh waha pr no-image wali pic show hogi */}
                <img src={props.pic ? props.pic : "/images/cool-background.png"} height="160px" className="card-img-top" alt="..." />
                <div className="card-body" >
                    <h5 className="card-title"><strong>{props.title}</strong></h5>
                    <div className='d-flex justify-content-between source'>
                        <p>{props.source}</p>
                        <p>{props.date}</p>
                    </div>
                    <hr />
                    <p className="card-text">{props.description}</p>
                    <a href={props.url} target='_blank' rel="noreferrer" className="btn btn-secondary w-100 btn-sm">Read Full Article</a>
                </div>
            </div>
        </div>
    )
}
