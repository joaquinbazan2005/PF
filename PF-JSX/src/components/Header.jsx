import Brand from "./Brand"
import CartWidget from "./CartWidget"
import NavBar from "./navBar"

const Header = () => {
    return(
        <div className="container-fluid  my-3">
            <div className="row">
                <div className="col-md-1">
                    <Brand />
                </div>
                <div className="col-md-9 d-flex align-items-center">
                    <NavBar />
                </div>
                <div className="col-md-1 d-flex align-items-center justify-content-end">
                    <p><CartWidget /></p>
                </div>
            </div>
        </div>
    )
}

export default Header