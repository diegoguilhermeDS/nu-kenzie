import "./styles.css"
import { Card } from "../Card"
import { Button } from "../Button/Button"
import { useState } from "react"

export const List = ({listTransitions, setListTransitions, listFilter, setListFilter}) => {

    const [btnSelect, setBtnSelect] = useState("Todos")

    const renderTransitions = (list) => {
        return (
            list.map((transaction, index) => <Card transaction={transaction} key={index} index={index} listFilter={listFilter} setListFilter={setListFilter} listTransitions={listTransitions} setListTransitions={setListTransitions}/>)
        )
    }


    const handleCategory = (value) => {
        setBtnSelect(value)
    
        if (value === "Todos") {
            setListFilter(listTransitions)
            
        } else if (value === "Entradas") {
            const listFilteredByEntry = listTransitions.filter((trans) => trans.type === "Entradas")
            setListFilter(listFilteredByEntry)

        } else if (value === "Despesas") {
            const listFilteredByExpenses = listTransitions.filter((trans) => trans.type === "Despesas")
            setListFilter(listFilteredByExpenses)
        }
    }

    

    return (
        <section className="section-list-transitions">
            <nav className="nav-btn-categories">
                <h3 className="title-4">Resumo financeiro</h3>
                <ul className="list-btn-categories">
                    <li><Button children={"Todos"} classAndColor={btnSelect === "Todos" ? "btn-pink btn-categorie" : "btn-grey btn-categorie"} handleBtn={() => handleCategory("Todos")}/></li>
                    <li><Button children={"Entradas"} classAndColor={btnSelect === "Entradas" ? "btn-pink btn-categorie" : "btn-grey btn-categorie"} handleBtn={() => handleCategory("Entradas")}/></li>
                    <li><Button children={"Despesas"} classAndColor={btnSelect === "Despesas" ? "btn-pink btn-categorie" : "btn-grey btn-categorie"} handleBtn={() => handleCategory("Despesas")}/></li>
                </ul>
            </nav>
            <ul className="list-card">
                {listFilter.length > 0 ? 
                    renderTransitions(listFilter): 
                    <div className="container-list-no-transition">
                        <h1 className="title-3">Você ainda não possui nenhum lançamento</h1>
                        <Card key={1}/>
                        <Card key={2}/>
                        <Card key={3}/>
                    </div> 
                } 
            </ul>
        </section>
        
    )
}