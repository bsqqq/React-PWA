import React from 'react'
import axios from 'axios'
class Jov extends React.Component {
    state = {
        pipou: []
    }

    componentDidMount() {
        axios.get('https://localhost:3333/').then(res => {
            console.log(res.data)
            this.setState({
                pipou: res.data
            })
        })
    }

    render() {
        return (
            <>
                <h3>Valores resgatados:</h3>
                <h2>
                    {this.state.pipou.map(pet => <div id='infos' key={pet._id}> <p>
                    {`${pet.Nome} - ${pet.Valor}R$ na data 
                    ${ new Date(pet.Data).toLocaleDateString('pt-BR', {timeZone: 'UTC'})} 
                    (${pet.Descricao})`} 
                    {/* <button onClick={axios.delete(`https://localhost:3333/delete/${pet._id}`, {data: pet._id})}> Excluir? </button> */}
                    </p></div>)}
                </h2>
            </>
        )
    }
}
/* teste */
export default Jov