import "./styles.css"
import { useState } from "react"
import { Button } from "../Button/Button"
import { Input } from "../Input"

export const Form = ({listTransitions, setListTransitions}) => {

    const [description, setDescription] = useState('')
    const [value, setValue] = useState(1)
    const [type, setType] = useState('Entradas')

    const handleSubmit = (event) => {
        event.preventDefault()
        
        const transition = {description, type, value}

        setListTransitions([...listTransitions, transition])
        setDescription('')
        setValue(1)
        setType('Entradas')
    }

    return (
        <form onSubmit={handleSubmit}>
            <span>Descrição</span>
            <Input type={"Text"} description={description} setDescription={setDescription}/>
            <small>Ex: Compra de roupas</small>
            <div>
                <div>
                    <label htmlFor="value">Valor</label>
                    <Input value={value} setValue={setValue}/>
                </div>
                <div>
                    <label htmlFor="typeValue">Tipo de valor</label>
                    <select name="type" id="type" value={type} onChange={event => {setType(event.target.value)}}>
                        <option value="Entrada" >Entradas</option>
                        <option value="Despesas" >Despesas</option>
                    </select>
                </div>
            </div>
           <Button children={"Inserir valor"}/>
        </form>
    )
}