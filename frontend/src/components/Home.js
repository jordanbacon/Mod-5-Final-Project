import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import SimpleMap from './Map'

export default class Home extends Component {

    render() {
        return(
            <div>
                <div className="top">
                    <div className="darkblock" >
                        <h2>BOOK TODAY!</h2>
                        <img src="https://static.thenounproject.com/png/1546383-200.png"/>
                    </div>
                </div>

                <div className="category">
                    <h1>Enjoy a Day at Sea! </h1>
                    <div className="row" id="row">
                        <div className="col-sm">
                            <div className="card" style={{width: "18rem"}}>
                                <img src="https://condorexpress.com/wp-content/uploads/2012/10/Arch-Point-Santa-Cruz-Island-Schwemmer1.jpg" className="card-img-sm" />
                                <div className="card-body">
                                    <h5 className="card-title"><strong>Cruising</strong></h5>
                                    <p className="card-text">Enjoy an easy ride from Ventura to one of the Channel Islands</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm">
                            <div className="card" style={{width: "18rem"}}>
                                <img src="http://4.bp.blogspot.com/_frMFGFEz_Vk/TOLFxLJofeI/AAAAAAAAAH4/_3S8mJ69WJw/s400/Cruise+2010+Southern+Carribean+515.jpg" className="card-img-sm" />
                                <div className="card-body">
                                    <h5 className="card-title"><strong>Fishing</strong></h5>
                                    <p className="card-text" id="card-desc">Bring your own poles or use the boat's</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm">
                            <div className="card" style={{width: "18rem"}}>
                                <img src="https://i.ytimg.com/vi/poLrtaroiGA/maxresdefault.jpg" className="card-img-sm" />
                                <div className="card-body">
                                    <h5 className="card-title"><strong>Swimming</strong></h5>
                                    <p className="card-text" id="card-desc">Jump on in!</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <br/>
                    {(localStorage.token) ?
                    <Link to="/shop"><button className="btn-lg btn-success" type="submit">Book Now</button></Link>
                    :<Link to="/signin"><button className="btn-lg btn-success" type="submit">Book Now</button></Link>
                    }
                </div>
                <div className="how">
                    <h1>Info</h1>
                    <div class="row">
                        <div class="col">
                        <h4 className="test-desc"><em>The Boat</em></h4>
                        <br/>
                        <h6 className="test-name"><strong>Info about Boat: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."</strong></h6>
                        </div>
                        <div class="col">
                        <h4 className="test-desc"><em>More Info</em></h4>
                        <br/>
                        <h6 className="test-name"><strong>Picture</strong></h6>
                        </div>
                    </div>                                               
                </div>
                <div className="about">
                    <div className="row">
                        <div className="col">
                            <h1>Contact Us</h1>
                            <div className = "row">
                                <div className="col-">
                                    <h5 className="aboutsub">Address:</h5>
                                    <h5 className="aboutsub">Email:</h5>
                                    <h5 className="aboutsub">Phone:</h5>
                                </div>
                                <div className="col">
                                    <h5 className="aboutsub1">Channel Islands Harbor Marina</h5>
                                    <h5 className="aboutsub1">example@gmail.com</h5>
                                    <h5 className="aboutsub1">1-800-THERASEA</h5>
                                </div>
                            </div>
                        </div>
                        <div className="col" id="map">
                            <SimpleMap/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}