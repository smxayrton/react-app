import React from 'react';
import './Presentation.css';

class Presentation extends React.Component{
    render(){
        return (
            <div>
                <div class="jumbotron">
                    <h1 class="display-4">Hello, We're XASMCOIN!</h1>
                        <p class="lead">We work delivering services on a private currency called XASM. It's a cryptocurrency made to make your transations 
                        easier and simpler</p>
                        <hr class="my-4" />
                        <p>We won't spend a lot of time talking, we will let our services show for themselves ;)</p>
                    <a class="btn btn-primary btn-primary-2 btn-lg" href="#" role="button">Learn more</a>
                </div>

                <div className="container">
                    <div className="row">
                        
                        <div className="col-md-4">
                            <div class="card" style={{width : '18rem'}}>
                                <img src="https://www.ifse.ca/wp-content/uploads/2018/01/iStock-Cryptocurrency.jpg" class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div class="card" style={{width : '18rem'}}>
                                <img src="https://www.vardhamaninfotech.com/blog/wp-content/uploads/2019/05/1_1J08qvsHdxnA7SBbl9Sgkw.png" class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div class="card" style={{width : '18rem'}}>
                                <img src="https://www.mdgadvertising.com/wp-content/uploads/2017/09/2224_1200x628_Facebook_The-Impact-of-Cyber-Security-on-Healthcare-Brands-1024x536.jpg" class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                            </div>
                        </div>
                    </div> 

                    
                </div>
            </div>


        );
    }
}

export default Presentation;