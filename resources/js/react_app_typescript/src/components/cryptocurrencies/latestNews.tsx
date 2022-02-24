import moment from "moment";
import React from "react";
import { connect } from "react-redux";
import { getLatestNews } from '../../redux/actions/cryptoActions';
import InfiniteScroll from 'react-infinite-scroll-component';
import {LoaderThreeDotsUpperCenter} from '../misc/loders';
import LoadingIcons from 'react-loading-icons';
import LinearProgress from '@mui/material/LinearProgress';




// import ProgressBar from "react-scroll-progress-bar";

type StateProps = {
    hasMore: boolean;
    page: number;
    limit: number,
    pending: boolean;
}

class LatestNews extends React.Component<any, StateProps> {
    constructor(props) {
        super(props);
        this.state = {
            hasMore: true,
            page: 0,
            limit: 3,
            pending: true,

        }  
        // this.props.getLatestNews();  
    }

    componentDidMount(): void {
        this.fetchNews();
        setInterval(() => {
            this.props.getLatestNews(0, this.state.limit);
        }, 5000);
        //  window.scrollTo(0,0);
    }


    fetchNews =() => {
        this.props.getLatestNews(this.state.page, this.state.limit)
        .then(res => {
            this.setState({pending: false})
        });
        this.setState((prevState, props) => ({
            page: prevState.page + 1
        }));
    }

    render(){
        return(
            <div className="max-h-fit overflow-x-hidden">
            { this.state.pending ? 
            <LoaderThreeDotsUpperCenter color="blue" />:
            // <LinearProgress />:

            <div className="d-flex flex-col justify-content-center max-w-4xl border-top border-dark">
                <div>
                    <h3 className="text-center text-cyan-900 shadow-md border-bottom border-dark"><span>Latest News</span></h3>
                </div>
        
            <div className="">
            
            {/* <div className="heading">
                    <h3 className="text-center text-cyan-900 shadow-md border-bottom border-dark"><span>Latest News</span></h3>
            </div> */}
                
            
            <InfiniteScroll
                dataLength={this.props.latestNewsData.length} //This is important field to render the next data
                next={this.fetchNews}
                hasMore={true}
                loader={<LoaderThreeDotsUpperCenter color="blue" />}
                style={{ textAlign: 'center', overflowX: 'hidden' }}
                // inverse={true} 
                height={600}
                endMessage={
                    <p style={{ textAlign: 'center' }}>
                    <b>Yay! You have seen it all</b>
                    </p>
                }
                // below props only if you need pull down functionality
                refreshFunction={this.fetchNews}
                pullDownToRefresh
                pullDownToRefreshThreshold={50}
                pullDownToRefreshContent={
                    <h3 style={{ textAlign: 'center' }}>&#8595; Pull down to refresh</h3>
                }
                releaseToRefreshContent={
                    <h3 style={{ textAlign: 'center' }}>&#8593; Release to refresh</h3>
                }
            >
            
            {/* <div className="max-h-96 overflow-x-hidden"> */}

            <div className="row">

           
            { this.props.latestNewsData.map((item,i) => {
                return(
                   <div className="col-xs-12 col-sm-12 mt-1" key={i}>
                    <div className="card bg-black" >
                      
                        <div className="card-content p-3">
                            <div className="row">
                               
                                <div className="col-md-4">
                                    <a className="img-card" href="#">
                                            <img className="h-24" src={item.imageurl} width="100%" />
                                    </a>
                                </div>
                            
                                <div className="col-md-8">
                                    <h4 className="card-title">
                                        <a className="text-decoration-none" href={item.url}> 
                                            <p className="text-orange-200 text-left">{item.title}</p>
                                        </a>
                                    </h4>

                               
                                </div>
                                <div className="row text-left mt-2">
                                    <span className="text-white">Tags: <span className="text-sky-400 text-wrap">{item.tags}</span> </span>
                                    <span className="text-orange-200 font-italic">{moment.unix(item.published_on).format('LLLL')}</span>
                                
                                </div>


                                {/* <div className="row text-left mt-2">
                                    <span className="text-white">Tags: <span className="text-sky-400 text-wrap">{item.tags}</span> </span>
                                    <span className="text-orange-200 text-right font-italic">{moment.unix(item.published_on).format('LLLL')}</span>
                                
                                </div> */}
                            </div> 
                            
                            
                        
                            {/* <div className="row">
                                <p className="text-white text-right">{moment.unix(item.published_on).format('LLLL')}</p>

                                <p className="text-white">Tags: <span className="text-sky-400 text-wrap">{item.tags}</span> </p>
                                
                            </div> */}
                            <div className="row text-left mt-2">
                                <p className="text-white">
                                    {item.body}
                                </p>
                            </div>

                        
                        
                    </div>
                    <div className="card-read-more">
                        <a href={item.url} target="_blank" className="btn btn-link btn-block text-decoration-none">
                            <span className="text-lime-500">Read More</span>
                        </a>
                    </div>

                    </div>
                    </div>
                )}
                )
            }
             </div>

            </InfiniteScroll>
            
            </div>
             
           

            </div>
        }
        </div>

        )
    }
}

const mapStateToProps = (state) => {
    const { latestNewsData } = state.cryptoCurrencies;
    return { latestNewsData };

}
const mapActionsToProps = ({
    getLatestNews
})

export default connect(mapStateToProps, mapActionsToProps)(LatestNews);