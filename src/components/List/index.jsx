import "./styles.css"
import { Card } from "../Card"
import { Button } from "../Button/Button"

export const List = ({listTransitions, setListTransitions}) => {

    const handleCategory = (event) => {
        const btnCurrency = event.target
        btnCurrency.classList.add("btn-pink")
        btnCurrency.classList.remove("btn-grey")

        const listBtn = Array.from(document.querySelector(".list-btn-categories").children)
        
        listBtn.forEach((element) => {
            if (element.children[0] !== btnCurrency) {
                element.children[0].classList.remove("btn-pink")
                element.children[0].classList.add("btn-grey")
            }
        })

        if (btnCurrency.innerText === "Todos") {
            console.log(btnCurrency.innerText)

        } else if (btnCurrency.innerText === "Entradas") {
            const listFilteredByEntry = listTransitions.filter((trans) => trans.type === "Entradas")
            console.log(listFilteredByEntry)
            console.log(btnCurrency.innerText)

        } else if (btnCurrency.innerText === "Despesas") {
            const listFilteredByExpenses = listTransitions.filter((trans) => trans.type === "Despesas")
            console.log(listFilteredByExpenses)
            console.log(btnCurrency.innerText)

        }
    }

    

    return (
        <section>
            <nav>
                <h3>Resumo financeiro</h3>
                <ul className="list-btn-categories">
                    <li><Button children={"Todos"} classAndColor={"btn-base btn-pink"} handleBtn={handleCategory}/></li>
                    <li><Button children={"Entradas"} classAndColor={"btn-base btn-grey"} handleBtn={handleCategory}/></li>
                    <li><Button children={"Despesas"} classAndColor={"btn-base btn-grey"} handleBtn={handleCategory}/></li>
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