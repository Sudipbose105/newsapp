import React,{useEffect,useState} from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types';
import InfiniteScroll from "react-infinite-scroll-component";
import './News.css';


const News=(props)=>{

  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);

  const updateNews = async ()=> {
    props.changeProgress(10);
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`; 
    setLoading(true)
    let data = await fetch(url);
    props.changeProgress(30);
    let parsedData = await data.json()
    setLoading(false)
    props.changeProgress(70);
    setArticles(parsedData.articles)
    setTotalResults(parsedData.totalResults)
    props.changeProgress(100);
    document.title=`${props.headline.length?`NewsToday - ${props.headline}`:`NewsToday - Home`}`;

}
  useEffect(() => {
    updateNews() 
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  
  // handlePrevClick=async()=>{
  //   let url=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${this.state.page - 1}&pageSize=${props.pageSize}`; //top headlines India API
  //   this.setState({loading:true})
  //    let data=await fetch(url); //promise
  //   let parsedData=await data.json();
  //   //console.log(parsedData);


  //   this.setState({
  //     page:this.state.page - 1,
  //     articles:parsedData.articles,
  //     loading:false
  //   })
  // }

  // handleNextClick= async()=>{

  //   let url=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${this.state.page + 1}&pageSize=${props.pageSize}`; //top headlines India API
  //   this.setState({loading:true})
  //   let data=await fetch(url); //promise
  //   let parsedData=await data.json();
  //   //console.log(parsedData);


  //   this.setState({
  //     page:this.state.page + 1,
  //     articles:parsedData.articles,
  //     loading:false
  //   })
  
  // }

  const fetchMoreData = async() => {
    let url=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page+1}&pageSize=${props.pageSize}`; //top headlines India API
    setPage(page + 1);
     let data=await fetch(url); //promise
     let parsedData=await data.json();

     setArticles(articles.concat(parsedData.articles));
     setTotalResults(parsedData.totalResults);
  };
    return (
      <div style={{marginTop:'80px'}}>
        <h1 className='text-center m-3 custom'>{`NewsToday - Top ${props.headline} Headlines`}</h1>
        {loading && <Spinner/>}
        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length !== totalResults}
          loader={<Spinner/>}
        >
        <div className="container">
        <div className="row">
        {articles.map((element)=>{
          return <div className="col-md-3" key={element.url}>
              <NewsItem title={element.title?element.title.slice(0,45):""} description={element.description?element.description.slice(0,88):""} imageUrl={element.urlToImage?element.urlToImage:"https://d1csarkz8obe9u.cloudfront.net/posterpreviews/breaking-news-poster-design-template-232c3f2700b91a0fd6e3a5a2e583a5da_screen.jpg?ts=1610645412"} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name}/>
            </div>
        })}
        </div>
        </div>
      </InfiniteScroll>
        {/* <div className="container d-flex justify-content-between">
          <button disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.handlePrevClick}> &larr; Previous</button>
          <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults/props.pageSize)} type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
        </div> */}
        
      </div>
    )
}

export default News;

News.defaultProps={
  country:'in',
  pageSize:8,
  category: 'general',
  //headline:'Home'
}

News.propTypes={
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string
}
