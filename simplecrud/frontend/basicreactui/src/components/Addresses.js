import React, { Component } from 'react'

export default class Addresses extends Component {
    backendURL = "http://localhost:8000"

    state = {
        addresses: [],
        id: 0,
        street: "",
        house_number: 0,
        administrative_zone: "",
        postal_zone: ""
    }

    onIdChange = event => {
        console.log(event)
        this.setState({id: event.target.value})
    }

    onUlicaChange = event => {
        console.log(event)
        this.setState({street: event.target.value})
    }

    onHisnaStevilkaChange = event => {
        console.log(event)
        this.setState({house_number: event.target.value})
    }

    onPostaChange = event => {
        console.log(event)
        this.setState({administrative_zone: event.target.value})
    }

    onPostnaStevilkaChange = event => {
        console.log(event)
        this.setState({postal_zone: event.target.value})
    }

    loadAddresses = event => {
        const url = this.backendURL + "/api/addresses/"
        console.log("Getting addresses")
        fetch(url, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Token ${this.props.token}`
            },
            method: 'GET',
            body: JSON.stringify(this.state.credentials)
        })
        .then(data => data.json())
        .then(data => {
                console.log(data.detail)
                console.log(data)
                data = data.detail ? [] : data
                this.setState({addresses: data})
            }
        )
        .catch(error => console.error(error))
    }

    addAddress = event => {
        const url = this.backendURL + "/api/addresses/"
        const payload = {
            id: this.state.id,
            street: this.state.street,
            house_number: this.state.house_number,
            administrative_zone: this.state.administrative_zone,
            postal_zone: this.state.postal_zone
        }
        console.log(this.state)
        console.log(payload)
        fetch(url, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Token ${this.props.token}`
            },
            method: 'POST',
            body: JSON.stringify(payload)
        })
        .catch(error => console.error(error))
    }

    render() {
        return (
            <div className="Addresses">
                <h1>Addresses</h1>
                <br/>
                { this.state.addresses.map(address => {
                    return <h3 key={address.id}>ID: {address.id}, {address.street} {address.house_number}, {address.postal_zone} {address.administrative_zone}</h3>
                })}
                <button onClick={this.loadAddresses}>Load addresses</button>
                <form onSubmit={this.addAddress}>
                    <span className="formtext">Dodaj nov naslov</span>
                        <input 
                        type="integer"
                        id="formTextID"
                        placeholder="ID" 
                        onChange={this.onIdChange}
                        required
                        />
                        <input 
                        type="text"
                        id="formTextUlica"
                        placeholder="Ulica" 
                        onChange={this.onUlicaChange}
                        required
                        />
                        <input 
                        type="text"
                        id="formTextHisnaStevilka"
                        placeholder="Hišna številka" 
                        onChange={this.onHisnaStevilkaChange}
                        required 
                        />
                        <input 
                        type="text"
                        id="formTextPosta"
                        placeholder="Pošta" 
                        onChange={this.onPostaChange}
                        required 
                        />
                        <input 
                        type="text"
                        id="formTextPostnaStevilka"
                        placeholder="Poštna številka" 
                        onChange={this.onPostnaStevilkaChange}
                        required 
                        />
                    <button onClick={this.addAddress}>Dodaj naslov</button>
                </form>
            </div>
        )
    }
}
