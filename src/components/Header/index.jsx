import "./styles.css"
import logo from "../../assets/img/NuKenzieBlack.svg"
import { Button } from "../Button/Button"

export const Header = ({setIsLoggedIn}) => {
    return (
        <header className="header">
            <div className="container container-header">
                <img src={logo} alt="icon logo" />
                <div className="container-btn-to-home">
                    <Button children={"Inicio"} classAndColor={"btn-grey btn-categorie"} handleBtn={() => setIsLoggedIn(false)}/>
                </div>
            </div>
        </header>
    )
}