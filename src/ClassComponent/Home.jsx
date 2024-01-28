import React, { Component } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component'
// npm install --save react-infinite-scroll-component
import NewsItem from './NewsItem'

export default class Home extends Component {
  // state variables banaye hai constructor ke  andar
  constructor() {
    super()
    this.state = {
      totalResults: 0,
      articles: [],
      page: 1,
      q: ""
    }
  }
  // ek async function apni body ke andar wait kr skta hai kuch promises ke resolve hone ka...
  // ye async hona chaiye kyoki promise kr thru data milega
  async getAPIData(q) {
    this.setState({ page: 1, q: q })
    
    // refresh na krna pade uske liye componentdidupdate use krna padega or ye call bhi usi mai hoga..
    var response = await fetch(`https://newsapi.org/v2/everything?q=${q}&page=${this.state.page}&pageSize=12&language=${this.props.language}&sortBy=publishedAt&apiKey=1405e002a9234fdf99ac01be59f4d78e`)
    response = await response.json()
    

    // aab data update ho jayga articles or total results mai then ye re render ho jayga
    
    if (response.articles) {
      this.setState({
        totalResults: response.totalResults,
        articles: response.articles.filter((x) => x.title !== "[Removed]")
        
      })
      
      
    }
  }
  //ye loader ke liye banaya hai
  fetchData = async () => {
    this.setState({ page: this.state.page + 1 })
    var response = await fetch(`https://newsapi.org/v2/everything?q=${this.state.q}&page=${this.state.page}&pageSize=12&language=${this.props.language}&sortBy=publishedAt&apiKey=1405e002a9234fdf99ac01be59f4d78e`)
    // Another api     1405e002a9234fdf99ac01be59f4d78e
    // Another Api     60fda53fa3be4e0aa5fe743389c1067d
    response = await response.json()    //proper javascript mai code mil jayga
    if (response.articles) {
      this.setState({
        articles: this.state.articles.concat(response.articles.filter((x) => x.title !== "[Removed]"))
      })
    }
  }

  // jab aapka component banega tab ye initially call ho jayga..
  componentDidMount() {
    this.getAPIData(this.props.q)
  }

  // agar update hone ke time pr render krwana hai toh hum component did update use krnege
  componentDidUpdate(oldProps) {
    if (this.props !== oldProps) {
      if (this.props.search && this.props.search !== oldProps.search)
        this.getAPIData(this.props.search)
      else
        this.getAPIData(this.props.q)
    }
  }
  render() {
    return (
      <>
        <div className="container-fluid my-3">
          <h4 className='bg-secondary text-center text-light p-2'>{this.props.q} News Items</h4>
          
          <InfiniteScroll
            className='infinite'
            dataLength={this.state.articles.length}
            next={this.fetchData}
            //articles ki length jab tk total result se kam hai tab tk chalega
            hasMore={this.state.articles.length < this.state.totalResults}
            // spinner get from bootstrap
            loader={
              <div className='text-center py-5'>
                <div className="spinner-border text-info" role="status">
                  <span className="visually-hidden">Loading...</span>
                </div>
              </div>
            }
            endMessage={
              <p style={{ textAlign: 'center' }}>
                <b>No More News Articles...</b>
              </p>
            }
          >
            <div className="row">
              {
                this.state.articles.map((item, index) => {
                  return <NewsItem
                    key={index}
                    title={item.title}
                    description={item.description}
                    source={item.source.name}
                    url={item.url}
                    pic={item.urlToImage}
                    date={(new Date(item.publishedAt)).toLocaleDateString()}
                  />
                })
              }
            </div>
          </InfiniteScroll>
        </div>
      </>
    )
  }
}
