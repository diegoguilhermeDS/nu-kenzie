import "./styles.css"
import trash from "../../assets/img/trash.png"
import nullCard from "../../assets/img/NoCard.svg"

export const Card = ({transaction='', index, listTransitions, setListTransitions}) => {
    
    const hadleRemove = (event) => {
        const idCardRemove = event.target.id
        setListTransitions(listTransitions.filter((trans, ind) => {
            return ind !== Number(idCardRemove)
        }))
    }   


    if (transaction !== '') {
        return (
            <li className="card" id={index}>
                <div className="container-description">
                    <h2>{transaction.description}</h2>
                    <span>{transaction.type}</span>
                </div>
                <p>{transaction.value}</p>
                <button id={index} onClick={hadleRemove}>
                    <img src={trash} alt="icon trash" id={index}/>
                </button>
            </li>
        )
    } else {
        return (
            <li id={index}>
                <img src={nullCard} alt="card illustrative" />
            </li>
        )
    }
}