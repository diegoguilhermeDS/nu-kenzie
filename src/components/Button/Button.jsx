import "./style.css"

export const Button = ({children, classAndColor="", handleBtn=""}) => {
    if (handleBtn === "") {
        return (
            <button type="submit" className="btn-base btn-pink">{children}</button>
        )
    } else {
        return (
            <button type="submit" className={`btn-base ${classAndColor}`} onClick={handleBtn}>{children}</button>
        )
    }
}