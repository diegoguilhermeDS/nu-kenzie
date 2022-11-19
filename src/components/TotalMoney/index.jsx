import "./styles.css"

export const TotalMoney = ({listTransitions}) => {

    if (listTransitions.length > 0) {
        const valueTotal = listTransitions.reduce((oldValue, currencyValue) => {
            return oldValue + currencyValue.value
        }, 0)
    
        return (
            <section className="section-value-total">
                <div className="container-infor-value-total">
                    <h3 className="title-4">Valor total:</h3>
                    <span className="text-3">O valor se refere ao saldo</span>
                </div>
                <h3 className="title-4 brand-1">R$ {valueTotal.toFixed(2).replace('.', ',')}</h3>
            </section>
        )
    }
}