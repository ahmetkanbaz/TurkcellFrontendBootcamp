import { Link, useNavigate } from "react-router-dom";
import logoMonito from "../../assets/logoMonito.svg";
import { Nav } from "./NavbarStyle";
import Button from "../../common/Button/Button";
import { setSearchQuery } from "../../redux/slices/filterSlice/filterSlice";
import { useDispatch, useSelector } from "react-redux";
import Toast from "../../common/Toast/Toast";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { IoLogOutOutline } from "react-icons/io5";
import { setUser } from "../../redux/slices/usersSlice/userSlice";
import { useState, useEffect } from "react";
const Navbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const loginUser = useSelector((state) => state.user.user);
  const [navBackgroundColor, setNavBackgroundColor] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setNavBackgroundColor(true);
    } else {
      setNavBackgroundColor(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleSearch = (e) => {
    dispatch(setSearchQuery(e.target.value));
  };

  const handleEnter = (e) => {
    if (e.key === "Enter") {
      if (Object.keys(loginUser).length === 0) {
        Toast({
          message:
            "Girmiş olduğunuz ifadeye göre ürün araması yapabilmek için lütfen giriş yapınız.",
          type: "warning",
        });
        setTimeout(() => {
          navigate("/auth/login");
        }, 2000);
      } else {
        navigate("/products");
      }
      e.preventDefault();
    }
  };

  const handleToastAllProducts = () => {
    Object.keys(loginUser).length === 0 &&
      Toast({
        message: "Tüm ürünleri görüntüleyebilmek için lütfen giriş yapınız.",
        type: "warning",
      });
  };

  const handleLogout = () => {
    localStorage.removeItem("isLogin");
    dispatch(setUser({}));
    Toast({
      message:
        "Başarılı bir şekilde çıkış yaptınız. Anasayfa'ya yönlendiriliyorsunuz.",
      type: "success",
    });
    navigate("/");
  };

  return (
    <Nav
      className="navbar navbar-expand-lg fixed-top py-3"
      navbackgroundcolor={navBackgroundColor.toString()}
    >
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
              <Link
                to={
                  Object.keys(loginUser).length !== 0
                    ? "/products"
                    : "/auth/login"
                }
                className="nav-link"
                onClick={handleToastAllProducts}
              >
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
            {Object.keys(loginUser).length === 0 ? (
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
                  buttonText="Sign Up"
                  color="#003459"
                  backgroundcolor="transparent"
                  onClick={() => navigate("/auth/register")}
                />
              </div>
            ) : (
              <div className="d-flex gap-2 col">
                <Button
                  padding="0.275rem 1.75rem"
                  buttonText="Cart"
                  color="#FDFDFD"
                  icon={<AiOutlineShoppingCart size="1.2rem" />}
                  iconPosition="right"
                  backgroundcolor="#003459"
                  onClick={() => navigate("/cart")}
                />
                <div className="dropdown">
                  <Button
                    padding="0.275rem 1.75rem"
                    className="dropdown-toggle"
                    backgroundcolor="#FDFDFD"
                    buttonText="Profile"
                    dataBsToggle="dropdown"
                  />
                  <ul className="dropdown-menu bg-transparent border-0">
                    <li>
                      <Button
                        className="dropdown-item"
                        type="button"
                        buttonText="Logout"
                        backgroundcolor="#FDFDFD"
                        color="#003459"
                        icon={<IoLogOutOutline size="1.2rem" />}
                        iconPosition="right"
                        onClick={handleLogout}
                      />
                    </li>
                  </ul>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </Nav>
  );
};

export default Navbar;
