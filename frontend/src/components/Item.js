import React, {Component} from 'react'
import { Button, UncontrolledPopover, PopoverHeader, PopoverBody } from 'reactstrap';

export default class Item extends Component {

    quantityChange = (e, item) => {
        let array = this.state.readOrder.map(i => {
            if (i.id === item.id) {
                i.number_of_passengers = e.target.value
                return i
            } else {
                return i
            }
        })
        this.setState({
            readOrder: array
        })
    }

    render() {
        return(
            <div>
                <div className="card" style={{width: "23rem"}}>
                    <img src={this.props.item.img_url} className="card-img-top" />
                    <div className="card-body">
                        <h5 className="card-title"><strong>{this.props.item.date}</strong></h5>
                        {/* <p className="card-text" id="card-desc">{this.props.item.number_of_passengers} passengers</p> */}
                        <p className="card-text"><strong>Passengers: </strong></p>
                        {/* {this.props.item.number_of_passengers} */}
                        {/* <button type="button" className="btn btn-success" onClick={() => this.props.addToCart(this.props.item)}>Add to Cart</button> */}
                        <div className="col" id="cartqty">
                            <select className="form-control" value={this.props.item.number_of_passengers} onChange={(e) => this.props.quantityChange(e, this.props.item)}>
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                                <option>6</option>
                            </select>
                        </div>
                        <br></br>
                        <Button id="PopoverFocus" type="button" className="btn btn-success" onClick={() => this.props.addToCart(this.props.item)}>Add to Cart</Button>
                        <UncontrolledPopover trigger="focus" placement="bottom" target="PopoverFocus">
                            <PopoverHeader>Added to Cart</PopoverHeader>
                        </UncontrolledPopover>
                    </div>
                </div>
            </div>
        )
    }
}


