import "./styles.css"

export const Input = ({type, description='', setDescription='', setValue='', value=''}) => {
    if (type === "Text") {
        return (
            <input type="text" name="description" value={description} placeholder="Digite aqui sua descrição" required onChange={event => {setDescription(event.target.value)}}/>
        )
    } else {
        return (
            <input type="number" id="value" value={value} required onChange={event => {setValue(Number(event.target.value))}}/>
        )
    }
}