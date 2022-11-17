import { Card } from "../Card"
import "./styles.css"

export const List = ({listTransitions}) => {
    return (
        <section>
            <nav>
                <h3>Resumo financeiro</h3>
                <ul>
                    <li><button>Todos</button></li>
                    <li><button>Entradas</button></li>
                    <li><button>Despesas</button></li>
                </ul>
            </nav>
            <ul className="list-card">
                {listTransitions.length > 0 ? 
                    listTransitions.map((transaction, index) => <Card transaction={transaction} key={index}/>) : 
                    <div>
                        <h1>Você ainda não possui nenhum lançamento</h1>
                        <ul>
                            <Card/>
                            <Card/>
                            <Card/>
                        </ul>
                    </div> 
                } 
            </ul>
        </section>
        
    )
}