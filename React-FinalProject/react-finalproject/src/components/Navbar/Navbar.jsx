import { Link, useNavigate } from "react-router-dom";
import logoMonito from "../../assets/logoMonito.svg";
const Navbar = () => {
  const navigate = useNavigate();
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
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
        <Link to={'/'} className="navbar-brand">
          <img src={logoMonito} alt="" />
        </Link>
        <h2 className="d-flex d-lg-none">Search Button</h2>
        <div className="collapse navbar-collapse ms-3" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
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
          <div className="d-flex">
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search something here!"
              aria-label="Search"
            />
          </form>
          <div>
            <button className="btn btn-primary" onClick={() => navigate('/auth/login')}>Giriş Yap</button>
            <button className="btn btn-success" onClick={() => navigate('/auth/register')}>Yeni Kayıt Oluştur</button>
          </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
