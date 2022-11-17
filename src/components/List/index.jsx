import "./styles.css"
import trash from "../../assets/img/trash.png"

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
                    listTransitions.map((elem, index) => {
                        return (
                            <li className="card" key={index}>
                                <div className="container-description">
                                    <h2>{elem.description}</h2>
                                    <span>{elem.type}</span>
                                </div>
                                <p>{elem.value}</p>
                                <button id={index}>
                                    <img src={trash} alt="icon trash" />
                                </button>
                            </li>
                        )
                    }) :
                    <div>
                        <h1>Você ainda não possui nenhum lançamento</h1>
                        <li>
                            <div></div>
                            <div></div>
                        </li>
                        <li>
                            <div></div>
                            <div></div>
                        </li>
                        <li>
                            <div></div>
                            <div></div>
                        </li>
                    </div> 
                } 
            </ul>
        </section>
        
    )
}