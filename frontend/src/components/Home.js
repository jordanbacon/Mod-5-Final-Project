import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import SimpleMap from './Map'

export default class Home extends Component {

    render() {
        return(
            <div>
                <div className="top">
                    <div className="darkblock">
                        <h2>The sea, once it casts its spell, holds one in its net of wonder forever.<br></br>- Jacques Yves Cousteau</h2>
                        {/* <img src="https://static.thenounproject.com/png/1546383-200.png"/> */}
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
                    <h1>About Us</h1>
                    <div class="row">
                        <div class="col">
                        <h4 className="test-desc"><em>The Boat</em></h4>
                        <br/>
                        <h6 className="test-name"><strong>TheraSEA is a 44’ Motor Yacht with a long and varied history. She began her life as a fishing vessel on the Great Lakes, but has been all over the Atlantic and Pacific, including making passage through the Panama Canal. After a long life of work, TheraSEA was renovated and has served as a recreational vessel for many years now. </strong></h6>
                        </div>
                        <div class="col">
                        <h4 className="test-desc"><em>The Program</em></h4>
                        {/* <div className="top">
                        <img src="https://scontent-dfw5-1.xx.fbcdn.net/v/t1.0-9/19884238_1026733174134694_165860053339451581_n.jpg?_nc_cat=110&_nc_oc=AQmIw5GFydAT2H_qx6jP6XRJ10vwIi7dHauZ6YRZf_bmqPp4VWLTBBaImWYkIqDbvM8&_nc_ht=scontent-dfw5-1.xx&oh=906349bc918057835963669bacd83a3e&oe=5E30F623"></img>
                        </div> */}
                        <br/>
                        <h6 className="test-name"><strong>TheraSEA is available for day cruises from Oxnard, CA to the Channel Islands for any patient referred by Member Hospitals. A typical cruise is a 4-5 hour outing from Oxnard to Anacapa Island and back. During the leisurely cruise we often observe dolphin, whale and seal activity. If requested far enough in advance, the trip can be tailored to accommodate those patients with an interest in fishing.</strong></h6>
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