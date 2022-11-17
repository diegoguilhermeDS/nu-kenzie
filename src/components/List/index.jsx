import "./styles.css"
import { Card } from "../Card"
import { Button } from "../Button/Button"

export const List = ({listTransitions, setListTransitions}) => {
    return (
        <section>
            <nav>
                <h3>Resumo financeiro</h3>
                <ul>
                    <li><Button children={"Todos"} classAndColor={"btn-base btn-pink"} handleBtn="ola"/></li>
                    <li><Button children={"Entradas"} classAndColor={"btn-base btn-grey"} handleBtn="ola"/></li>
                    <li><Button children={"Despesas"} classAndColor={"btn-base btn-grey"} handleBtn="ola"/></li>
                </ul>
            </nav>
            <ul className="list-card">
                {listTransitions.length > 0 ? 
                    listTransitions.map((transaction, index) => <Card transaction={transaction} key={index} index={index} listTransitions={listTransitions} setListTransitions={setListTransitions}/>) : 
                    <div>
                        <h1>Você ainda não possui nenhum lançamento</h1>
                        <ul>
                            <Card key={1}/>
                            <Card key={2}/>
                            <Card key={3}/>
                        </ul>
                    </div> 
                } 
            </ul>
        </section>
        
    )
}