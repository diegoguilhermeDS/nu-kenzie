import "./styles.css"

export const Select = ({type, setType}) => {
    return (
        <select name="type" id="type" onChange={event => {setType(event.target.value)}} className={type === "Tipo" ? "select-type select-null" : "select-type"} placeholder="Entradas">
            <option value="Tipo" selected disabled>Selecione</option>
            <option value="Entrada" >Entradas</option>
            <option value="Despesas" >Despesas</option>
        </select>
    )
}