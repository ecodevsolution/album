import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ProgressiveImage from "react-progressive-image-loading";


class ListContent extends Component {

     constructor(){
        super();
        this.state = {
            data: []
        };
    };    

    componentDidMount(){
        const BASE_URL = 'http://localhost:8080/api/photo/grid.php';
        fetch(BASE_URL)
        .then(response => response.json())
        .then(json => {
            this.setState({data :json }) 
            
        });
    };


    render() {
        var liStyle = {
            width:'90px',
            height: '89px',
        }
        
         const grid = this.state.data.map((data, i) =>{
            return  <li key={i}><Link to="#"><img src={data.images} alt=""/></Link></li>
        });

        return (
                <div id="main" className="site-main">
                    <div id="primary" className="content-area">
            	        <div id="content" className="site-content" role="main"> 
                	        <div className="layout-full"> 
                                <div className="home-wrap">
                  
                                    <div className="ri-grid" data-animation="random" data-interval="1600" data-max-step="3">
                                        <ul>
                                            {this.state.data.map(data =>                                                
                                                 <ProgressiveImage
                                                    preview="images/home-grid/1.jpg"
                                                    src={data.images}
                                                    render={(src, style) => <img src={src} style={style} />}
                                                />

                                            )}
                                           
                                            {/*<li><a href="#"><img src="images/home-grid/1.jpg" alt="image"/></a></li>
                                            <li><a href="#"><img src="images/home-grid/1.jpg" alt="image"/></a></li>
                                            <li><a href="#"><img src="images/home-grid/1.jpg" alt="image"/></a></li>
                                            <li><a href="#"><img src="images/home-grid/1.jpg" alt="image"/></a></li>
                                            <li><a href="#"><img src="images/home-grid/1.jpg" alt="image"/></a></li>
                                            <li><a href="#"><img src="images/home-grid/1.jpg" alt="image"/></a></li>
                                            <li><a href="#"><img src="images/home-grid/1.jpg" alt="image"/></a></li>
                                            <li><a href="#"><img src="images/home-grid/1.jpg" alt="image"/></a></li>
                                            <li><a href="#"><img src="images/home-grid/1.jpg" alt="image"/></a></li>
                                            <li><a href="#"><img src="images/home-grid/1.jpg" alt="image"/></a></li>
                                            <li><a href="#"><img src="images/home-grid/1.jpg" alt="image"/></a></li>
                                            <li><a href="#"><img src="images/home-grid/1.jpg" alt="image"/></a></li>
                                            <li><a href="#"><img src="images/home-grid/1.jpg" alt="image"/></a></li>
                                            <li><a href="#"><img src="images/home-grid/1.jpg" alt="image"/></a></li>
                                            <li><a href="#"><img src="images/home-grid/1.jpg" alt="image"/></a></li>
                                            <li><a href="#"><img src="images/home-grid/1.jpg" alt="image"/></a></li>
                                            <li><a href="#"><img src="images/home-grid/1.jpg" alt="image"/></a></li>
                                            <li><a href="#"><img src="images/home-grid/1.jpg" alt="image"/></a></li>
                                            <li><a href="#"><img src="images/home-grid/1.jpg" alt="image"/></a></li>
                                            <li><a href="#"><img src="images/home-grid/1.jpg" alt="image"/></a></li>
                                            <li><a href="#"><img src="images/home-grid/1.jpg" alt="image"/></a></li>
                                            <li><a href="#"><img src="images/home-grid/1.jpg" alt="image"/></a></li>
                                            <li><a href="#"><img src="images/home-grid/1.jpg" alt="image"/></a></li>
                                            <li><a href="#"><img src="images/home-grid/1.jpg" alt="image"/></a></li>
                                            <li><a href="#"><img src="images/home-grid/1.jpg" alt="image"/></a></li>
                                            <li><a href="#"><img src="images/home-grid/1.jpg" alt="image"/></a></li>
                                            <li><a href="#"><img src="images/home-grid/1.jpg" alt="image"/></a></li>
                                            <li><a href="#"><img src="images/home-grid/1.jpg" alt="image"/></a></li>
                                            <li><a href="#"><img src="images/home-grid/1.jpg" alt="image"/></a></li>
                                            <li><a href="#"><img src="images/home-grid/1.jpg" alt="image"/></a></li>
                                            <li><a href="#"><img src="images/home-grid/1.jpg" alt="image"/></a></li>
                                            <li><a href="#"><img src="images/home-grid/1.jpg" alt="image"/></a></li>
                                            <li><a href="#"><img src="images/home-grid/1.jpg" alt="image"/></a></li>
                                            <li><a href="#"><img src="images/home-grid/1.jpg" alt="image"/></a></li>
                                            <li><a href="#"><img src="images/home-grid/1.jpg" alt="image"/></a></li>
                                            <li><a href="#"><img src="images/home-grid/1.jpg" alt="image"/></a></li>
                                            <li><a href="#"><img src="images/home-grid/1.jpg" alt="image"/></a></li>
                                            <li><a href="#"><img src="images/home-grid/1.jpg" alt="image"/></a></li>
                                            <li><a href="#"><img src="images/home-grid/1.jpg" alt="image"/></a></li>
                                            <li><a href="#"><img src="images/home-grid/1.jpg" alt="image"/></a></li>
                                            <li><a href="#"><img src="images/home-grid/1.jpg" alt="image"/></a></li>
                                            <li><a href="#"><img src="images/home-grid/1.jpg" alt="image"/></a></li>
                                            <li><a href="#"><img src="images/home-grid/1.jpg" alt="image"/></a></li>
                                            <li><a href="#"><img src="images/home-grid/1.jpg" alt="image"/></a></li>*/}

                                            
                                        </ul>
                                    </div>
                                
                                    <div className="intro">
            
                                        <h2>	
                                            
                                            Hi. I am a photographer<br/>
                                            I capture&nbsp;
            
                                            <span className="rotate-words" data-interval="3000">
                                                <span>life.</span>
                                                <span>moments.</span>
                                                <span>happiness.</span>
                                                <span>emotions.</span>
                                                <span>action.</span>
                                                <span>impression.</span>
                                                <span>beauty.</span>
                                            </span>
            
                                        </h2>
            
                                    </div>
                   
                                </div>
                            </div>
                     </div>
                 </div>
            </div>        
        );
    }
}

export default ListContent;