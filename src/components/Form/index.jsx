import "./styles.css"
import { useState } from "react"
import { Button } from "../Button/Button"
import { Input } from "../Input"
import { Select } from "../Select"
import { ToashForm } from "../Toash"

export const Form = ({listTransitions, setListTransitions, listFilter, setListFilter}) => {

    const [description, setDescription] = useState("")
    const [value, setValue] = useState()
    const [type, setType] = useState("Tipo")
    const [goToash, setGoToash] = useState(false)

    const handleSubmit = (event) => {
        event.preventDefault()
        
        if (type !== "Tipo") {
            const transition = {description, type, value}
    
            setListTransitions([...listTransitions, transition])
            setListFilter([...listFilter, transition])
            setDescription("")
            setValue("")
            setType("Tipo")
        } else {
            setGoToash(true)
            setTimeout(() => {
                setGoToash(false)
            }, 3000)
        }
    }

    return (
        <form onSubmit={handleSubmit} className="form-transitions">
            <span className="text-3">Descrição</span>
            <Input type={"Text"} description={description} setDescription={setDescription}/>
            <span className="text-3 grey-2">Ex: Compra de roupas</span>
            <div className="container-data-transitions">
                <div className="container-value">
                    <label htmlFor="value" className="text-3">Valor</label>
                    <Input value={value} setValue={setValue}/>
                </div>
                <div className="container-type">
                    <label htmlFor="typeValue" className="text-3">Tipo de valor</label>
                    <Select type={type} setType={setType}/>
                </div>
            </div>
           <Button children={"Inserir valor"}/>
           {goToash ? <ToashForm/>  : ''}
        </form>
    )
}