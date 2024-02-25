import { Link } from "react-router-dom"

const NavBar = () => {
    return (
        <>
            <ul className="nav">
                <li className="nav-item">
                    <Link to={"/"} className="nav-link text-dark fs-6">Home</Link>
                </li>
                <li className="nav-item">
                    <Link to={"/productos"} className="nav-link text-dark fs-6">Productos</Link>
                </li>
                <li className="nav-item">
                    <Link to={"/categoria/Hombre"} className="nav-link text-dark fs-6">Hombre</Link>
                </li>
                <li className="nav-item">
                    <Link to={"/categoria/Mujer"} className="nav-link text-dark fs-6">Mujer</Link>
                </li>
                <li className="nav-item">
                    <Link to={"/contacto"} className="nav-link text-dark fs-6">Contacto</Link>
                </li>
            </ul>
        </>
    )
}

export default NavBar