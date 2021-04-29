import React, { Component } from 'react'

export default class Login extends Component {
    backendURL = "http://localhost:8000"
    state = {
        credentials: {
            username: '',
            password: ''
        }
    }

    inputChanged = event => {
        const cred = this.state.credentials
        cred[event.target.name] = event.target.value
        this.setState({credentials: cred})
    }

    login = event => {
        const url = this.backendURL + "/api/auth/"
        console.log("Logging in")
        fetch(url, {
            headers: {'Content-Type': 'application/json'},
            method: 'POST',
            body: JSON.stringify(this.state.credentials)
        })
        .then(data => data.json())
        .then(data => {this.props.userLogin(data.token)})
        .catch(error => console.error(error))
    }

    register = event => {
        const url = this.backendURL + "/api/users/"
        console.log("Registering new account")
        fetch(url, {
            headers: {'Content-Type': 'application/json'},
            method: 'POST',
            body: JSON.stringify(this.state.credentials)
        })
        // .then(data => data.json())
        // .then(data => {console.log(data)})
        .catch(error => console.error(error))
    }

    render() {
        return (
            <div className="App">
                <h1>Login user</h1>
                <label>
                    Username:
                    <input type="text" name="username"
                    value={this.state.credentials.username}
                    onChange={this.inputChanged}/>
                </label>
                <br/>
                <label>
                    Password:
                    <input type="password" name="password"
                    value={this.state.credentials.password}
                    onChange={this.inputChanged}/>
                </label>
                <br/>
                <button onClick={this.login}>
                    Login
                </button>
                <button onClick={this.register}>
                    Register
                </button>
            </div>
        )
    }
}
