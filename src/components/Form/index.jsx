import "./styles.css"
import { useState } from "react"
import { Button } from "../Button/Button"

export const Form = ({listTransitions, setListTransitions}) => {

    const [description, setDescription] = useState('')
    const [value, setValue] = useState(1)
    const [type, setType] = useState('Entrada')

    const handleSubmit = (event) => {
        event.preventDefault()
        
        const transition = {description, type, value}

        setListTransitions([...listTransitions, transition])

        setDescription('')
        setValue(1)
        setType('Entrada')
    }

    return (
        <form onSubmit={handleSubmit}>
            <span>Descrição</span>
            <input type="text" name="description" value={description} placeholder="Digite aqui sua descrição" required onChange={event => {setDescription(event.target.value)}}/>
            <small>Ex: Compra de roupas</small>
            <div>
                <div>
                    <label htmlFor="value">Valor</label>
                    <input type="number" id="value" value={value} required onChange={event => {setValue(Number(event.target.value))}}/>
                </div>
                <div>
                    <label htmlFor="typeValue">Tipo de valor</label>
                    <select name="type" id="type" value={type} onChange={event => {setType(event.target.value)}}>
                        <option value="Entrada" >Entrada</option>
                        <option value="Despesas" >Despesas</option>
                    </select>
                </div>
            </div>
           <Button children={"Inserir valor"}/>
        </form>
    )
}