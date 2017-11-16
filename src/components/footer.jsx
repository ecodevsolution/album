import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Footer extends Component {

  constructor(){
        super();
        this.state = {
            data: []
        };
    };    

    componentWillMount(){
        this.mounted = true;
        const BASE_URL = 'http://localhost:8080/api/photo/social.php';
        fetch(BASE_URL)
        .then(response => response.json())
        .then(json => {
            this.setState({data :json })                        
        });
    };
     componentWillUnmount() {
        this.mounted = false;
    }
    render() {

        const social = this.state.data.map((data, i) =>{
            return  <li key={i}><Link className={data.social} target="_blank" to={data.link}></Link></li>
        });

        return (
            <div>
               <footer id="colophon" className="site-footer" role="contentinfo">
                   <div className="layout-medium">
                       <div className="footer-social">                                
                           <ul className="social">
                               {social}
                           </ul>
                           
                       </div>
                       <div className="site-info">                                
                           <p>Copyright &copy; 2017 Adinugraha</p>                
                       </div>

                   </div>
               </footer>
            </div>
        );
    }
}

export default Footer;