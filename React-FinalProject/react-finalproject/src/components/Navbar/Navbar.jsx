import { Link, useNavigate } from "react-router-dom";
import logoMonito from "../../assets/logoMonito.svg";
import { Nav } from "./NavbarStyle";
const Navbar = () => {
  const navigate = useNavigate();
  return (
    <Nav className="navbar navbar-expand-lg sticky-top py-3">
      <div className="container">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <Link to={"/"} className="navbar-brand">
          <img src={logoMonito} alt="" />
        </Link>
        <h2 className="d-flex d-lg-none">Search Button</h2>
        <div
          className="collapse navbar-collapse ms-3"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav mb-2 me-5 mb-lg-0 gap-lg-5 gap-md-3">
            <li className="nav-item">
              <a className="nav-link" href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Category
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Contact
              </a>
            </li>
          </ul>
          <div className="d-flex gap-5 w-100">
            <form role="search" className="me-auto">
              <input
                className="form-control rounded-pill shadow-none border-0"
                type="search"
                placeholder="Search something here!"
              />
            </form>
            <div className="d-flex gap-2">
              <button
                className="btn btn-primary"
                onClick={() => navigate("/auth/login")}
              >
                Giriş Yap
              </button>
              <button
                className="btn btn-success"
                onClick={() => navigate("/auth/register")}
              >
                Yeni Kayıt Oluştur
              </button>
            </div>
          </div>
        </div>
      </div>
    </Nav>
  );
};

export default Navbar;
