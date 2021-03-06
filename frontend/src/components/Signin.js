import React, {Component} from 'react'

export default class Signin extends Component {

    handleChange = e => {
        this.setState({
          [e.target.name]: e.target.value
        })
    }

    login = (e) => {
        console.log(this.state.email)
        console.log(this.state.password)

        e.preventDefault()

        if (this.state.password == "" || this.state.email == "") {
          alert("Please type in your login information and try again")
        } else {
          fetch('http://localhost:3000/api/v1/login', {
            method: 'POST',
            headers:{
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              email: this.state.email,
              password: this.state.password
            })
          })
          .then(res => res.json())
          .then(data => {
              localStorage.token = data.token
              localStorage.id = data.id
              this.props.history.push("/shop")
              this.props.loggedIn()
          })
        }
      }

    render() {
        return(
            <div className="signin">
                <h1>Sign In</h1>
                <form onSubmit={(e) => this.login(e)}>
                    <div className="form-group">
                        <label for="exampleInputEmail1">Email address</label>
                        <input type="email" className="form-control" name="email" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" onChange={this.handleChange}/>
                    </div>
                    <div className="form-group">
                        <label for="exampleInputPassword1">Password</label>
                        <input type="password" className="form-control" name="password" id="exampleInputPassword1" placeholder="Password" onChange={this.handleChange}/>
                    </div>
                    
                    <button type="submit" className="btn btn-success">Sign In</button>
                </form>
            </div>
        )
    }
}