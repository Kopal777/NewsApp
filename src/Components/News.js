import React, { Component } from 'react'
import NewsItem from './NewsItem'
import InfiniteScroll from "react-infinite-scroll-component";
import Spinner from './Spinner';
export class news extends Component {

    array = [];

    constructor(props) {
        super(props);
        this.state = {
            array: [],
            page: 1,
            loading: false,
            totalResults: 0
        }
    }

    async updateNews() {
        //Fetching Api Method 1
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=cbe89733d27c44bf8bd3934ab43b4022&page=${this.state.page}&pageSize=${this.props.pageSize}`;
        let data = await fetch(url);
        let parse = await data.json();
        console.log(parse.articles);
        this.setState({
            array: parse.articles,
            totalResults: parse.totalResults,
            loading: true
        })
    }
    fetchMoreData = async () => {
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=cbe89733d27c44bf8bd3934ab43b4022&page=${this.state.page+1}&pageSize=${this.props.pageSize}`;
        let data = await fetch(url);
        let parse = await data.json();
        console.log(parse.articles);
        this.setState({
            page: this.state.page + 1,
            array: this.state.array.concat(parse.articles),
            totalResults: parse.totalResults,
        })
    };

    async componentDidMount() {
        this.updateNews();
    }

    //Fetching Api Method 2

    //     fetch("https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=cbe89733d27c44bf8bd3934ab43b4022")       
    //         .then((response) => { return response.json() })
    //         .then((data) => {
    //             this.setState({array: data.articles})
    //             console.log(data.articles)
    //         })
    // }


    // handlePrevClick = async () => {
    //     if ((this.state.page <= Math.ceil(this.state.totalResults / this.props.pageSize)) && (this.state.page !== 1)) {
    //         this.setState({ page: this.state.page - 1 })
    //         this.updateNews();

    //     }

    // }

    // handleNextClick = async () => {
    //     if (this.state.page < Math.ceil(this.state.totalResults / this.props.pageSize)) {
    //         this.setState({ page: this.state.page + 1 })
    //         this.updateNews();

    //     }
    // }


    render() {
        return (
            <>
                <div className="container">
                    <div className="d-flex justify-content-center my-4">
                        <h2>NewsTime - {this.props.category} Headlines</h2>
                    </div>
                    <InfiniteScroll
                        dataLength={this.state.array.length}
                        next={this.fetchMoreData}
                        hasMore={this.state.array.length !== this.state.totalResults}
                        loader={<Spinner/>}>

                        <div className="row my-4">
                            {this.state.array.map((element) => {
                                return <div className="col-md-4 my-2" key={element.url}>
                                    <NewsItem title={element.title} description={element.description} imageUrl={element.urlToImage} newsUrl={element.url} source={element.source.name} author={element.author} publishedAt={element.publishedAt} />
                                </div>
                            })}
                        </div>
                    </InfiniteScroll>
                    {/* <div className="d-flex justify-content-between my-3">
                        <button type="button" className="btn btn-dark" onClick={this.handlePrevClick}>&larr;Previous</button>
                        <button type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next&rarr;</button>
                    </div> */}
                </div>
            </>
        )
    }
}
export default news
