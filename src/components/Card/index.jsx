import "./styles.css"
import trash from "../../assets/img/trash.png"
import nullCard from "../../assets/img/NoCard.svg"

export const Card = ({transaction='', key=''}) => {
    if (transaction !== '') {
        return (
            <li className="card" key={key}>
                <div className="container-description">
                    <h2>{transaction.description}</h2>
                    <span>{transaction.type}</span>
                </div>
                <p>{transaction.value}</p>
                <button id={key}>
                    <img src={trash} alt="icon trash" />
                </button>
            </li>
        )
    } else {
        return (
            <li>
                <img src={nullCard} alt="card illustrative" />
            </li>
        )
    }
}