import "./styles.css"

export const TotalMoney = ({listTransitions}) => {

    if (listTransitions.length > 0) {
        const valueTotal = listTransitions.reduce((oldValue, currencyValue) => {
            return oldValue + currencyValue.value
        }, 0)
    
        return (
            <section>
                <div>
                    <h3>Valor total:</h3>
                    <span>O valor se refere ao saldo</span>
                </div>
                <h2>R$ {valueTotal.toFixed(2).replace('.', ',')}</h2>
            </section>
        )
    }
}