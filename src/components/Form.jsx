import React from 'react'
import axios from 'axios'
import cors from 'cors'
import '../styles/Form.css'
class Form extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            petName: String,
            petPrice: Number,
            petDate: Date,
            petDesc: String
        };

        this.onChangePetName = this.onChangePetName.bind(this)
        this.onChangePetPrice = this.onChangePetPrice.bind(this)
        this.onChangePetDate = this.onChangePetDate.bind(this)
        this.onChangePetDesc = this.onChangePetDesc.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        cors()
    }


    onChangePetName(event) {
        this.setState({
            petName: event.target.value
        });
    }

    onChangePetPrice(event) {
        this.setState({
            petPrice: event.target.value
        });
    }

    onChangePetDate(event) {
        this.setState({
            petDate: event.target.value
        });
    }

    onChangePetDesc(event) {
        this.setState({
            petDesc: event.target.value
        });
    }

    handleSubmit(event) {
        alert('Um nome foi enviado: ' + this.state.petName);
        event.preventDefault();
        const userObj = {
            petName: this.state.petName,
            petPrice: this.state.petPrice,
            petDate: this.state.petDate,
            petDesc: this.state.petDesc
        }
        console.log(userObj)
        axios.post('https://localhost:3333/post', userObj).then(res => {
            alert(`${res.data}`, console.log(userObj))
            window.location.reload()
        }).catch(err => console.log(err))

    }

    render() {
        return (
            <>
                <div className='form-data' id='container'>
                    <form onSubmit={this.handleSubmit}>
                        <label>Insira o nome do pet aqui: <span role='img' aria-label='hamster'>🐹</span><br />
                            <input type="text" required={true} name='petName' onChange={this.onChangePetName} />
                        </label><br />
                        <label>Insira o preço da compra: <span role='img' aria-label='patinhas'>🐾</span><br />
                            <input type="number" required={true} step='0.01' min='0' name='petPrice' onChange={this.onChangePetPrice} />
                        </label><br />
                        <label>Insira a data da compra: <span role='img' aria-label='calendario'>📅</span><br />
                            <input type="date" required={true} name='petDate' onChange={this.onChangePetDate} />
                        </label><br />
                        <label>Insira uma descriçāo para ajudar a lembrar: <span role='img' aria-label='gatinho sorrindo'>😸</span><br />
                            <input type="text" required={true} name='petDesc' onChange={this.onChangePetDesc} />
                        </label><br />
                        <input type="submit" id='enviar' value="Enviar" onClick={console.log(this.state)} />
                        <br />
                    </form>
                </div>
            </>
        )
    }
}

export default Form
