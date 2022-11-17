import "./styles.css"

export const Form = () => {

    return (
        <form>
            <span>Descrição</span>
            <input type="text" placeholder="Digite aqui sua descrição"/>
            <small>Ex: Compra de roupas</small>
            <div>
                <div>
                    <label htmlFor="value">Valor</label>
                    <input type="number" id="value"/>
                </div>
                <div>
                    <label htmlFor="typeValue">Tipo de valor</label>
                    <select name="type" id="typeValue">
                        <option value="0" >Entrada</option>
                        <option value="1" >Saída</option>
                    </select>
                </div>
            </div>
            <button type="submit">Inserir valor</button>
        </form>
    )
}