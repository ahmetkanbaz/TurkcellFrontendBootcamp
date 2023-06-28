import { Link, useNavigate } from "react-router-dom";
import logoMonito from "../../assets/logoMonito.svg";
import { Nav } from "./NavbarStyle";
import Button from "../../common/Button/Button";
import { setSearchQuery } from "../../redux/slices/filterSlice/filterSlice";
import { useDispatch } from "react-redux";
const Navbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSearch = (e) => {
    dispatch(setSearchQuery(e.target.value));
  };

  const handleEnter = (e) => {
    if (e.key === "Enter") {
      navigate("/products")
      e.preventDefault();
    }
  };

  return (
    <Nav className="navbar navbar-expand-lg fixed-top py-3">
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
          className="collapse navbar-collapse ps-3"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav mb-2 me-5 mb-lg-0 gap-lg-5 gap-md-3">
            <li className="nav-item">
              <Link to={"/"} className="nav-link">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/products"} className="nav-link">
                Category
              </Link>
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
          <div className="row gap-3 gap-lg-0 w-100 align-items-center">
            <form role="search" className="col">
              <input
                className="form-control rounded-pill shadow-none border-0"
                type="search"
                placeholder="Search something here!"
                onChange={handleSearch}
                onKeyDown={handleEnter}
              />
            </form>
            <div className="d-flex gap-2 col">
              <Button
                padding="0.275rem 1.75rem"
                buttonText="Login"
                color="#FDFDFD"
                backgroundcolor="#003459"
                onClick={() => navigate("/auth/login")}
              />
              <Button
                padding="0.275rem 1.75rem"
                buttonText="Register"
                color="#003459"
                backgroundcolor="transparent"
                onClick={() => navigate("/auth/register")}
              />
            </div>
          </div>
        </div>
      </div>
    </Nav>
  );
};

export default Navbar;
