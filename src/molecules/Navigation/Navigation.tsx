import { Link } from "../../atoms/components/link/Link"
import "./Navigation.css"

export function Navigation() {
    const navItems = [
        {href: "", text: "Обо мне"},
        {href: "", text: "Навыки"},
        {href: "", text: "Проекты"},
        {href: "", text: "Опыт"},
    ]
    return (
        <nav className="nav" role="navigation">
            <ul className="nav__list">
                {navItems.map(({href, text}) => {
                    return (
                        <li key={href} className="nav__item">
                            <Link className="nav__link" href={href} text={text} variant="casual"/>
                        </li>
                    )
                })}
            </ul>
        </nav>
    )
}