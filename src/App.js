import React from 'react'
import Tick from './components/relogio.jsx'
import ComParam from './components/ComParametro.jsx'
import Form from './components/Form.jsx'
import Jov from './components/outroComp'
import './index.css'

function App() {
    return (
        <>
            <h1>Pagina atualizada as: <Tick /></h1>
            <ComParam titulo='🐶 App para controlar gastos com seu pet 🐱' />
            <Form />
            <Jov />
        </>
    );
}

export default App