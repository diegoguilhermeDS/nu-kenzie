import "./styles.css"
import logo from "../../assets/img/NuKenzie.svg"
import { Button } from "../Button/Button"

export const Header = ({setIsLoggedIn}) => {
    return (
        <div>
            <img src={logo} alt="icon logo" />
            <Button children={"Inicio"} classAndColor={"btn-grey"} handleBtn={() => setIsLoggedIn(false)}/>
        </div>
    )
}