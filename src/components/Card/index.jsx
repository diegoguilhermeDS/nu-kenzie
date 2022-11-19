import "./styles.css"
import { IconTrash } from "../ButtonTrash"
import nullCard from "../../assets/img/NoCard.svg"

export const Card = ({transaction="", index, listFilter, setListFilter, listTransitions, setListTransitions}) => {
    
    const hadleRemove = (event) => {
        const idCardRemove = event.target.id
        setListFilter(listFilter.filter((trans, ind) => {
            return ind !== Number(idCardRemove)
        }))
        setListTransitions(listTransitions.filter((trans, ind) => {
            return ind !== Number(idCardRemove)
        }))
    }   

    if (transaction !== "") {
        return (
            <li className={transaction.type === "Entradas" ? "card card-entry" : "card"} id={index}>
                <div className="container-description">
                    <h2 className="title-4">{transaction.description}</h2>
                    <span className="text-3">{transaction.type}</span>
                </div>
                <span className="text-3">R$ {transaction.value.toFixed(2).replace(".",",")}</span>
                <button id={index} onClick={hadleRemove} className="btn-trash">
                    <IconTrash/>
                </button>
            </li>
        )
    } else {
        return (
            <li id={index} className={"card-no-transition"}>
                <img src={nullCard} alt="card illustrative" />
            </li>
        )
    }
}