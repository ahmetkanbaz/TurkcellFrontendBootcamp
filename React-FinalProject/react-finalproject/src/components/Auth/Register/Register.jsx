import { Link } from "react-router-dom";
import { BsFacebook, BsTwitter } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import logoMonito from "../../../assets/logoMonito.svg";
import styled from "styled-components";
const Register = () => {
  const Logo = styled.img`
    transform: rotate(-25deg);
  `;

  return (
    <div className="container py-5">
      <div className="row justify-content-center align-items-center gap-3 p-5 bg-body-tertiary rounded-3">
        <div className="col-lg-4 col-md-6 col-12">
          <div className="d-flex gap-3 mb-2">
            <Logo src={logoMonito} alt="" className="img-fluid w-25" />
            <h3>Yeni Kayıt Oluştur</h3>
          </div>
          <form>
            <div className="row">
              <div className="col-lg-6 col-12">
                <label htmlFor="registerFirstName"></label>
                <input
                  type="text"
                  className="form-control shadow-none border-secondary"
                  id="registerFirstName"
                  name="registerFirstName"
                  placeholder="Adınız..."
                />
              </div>
              <div className="col-lg-6 col-12">
                <label htmlFor="registerLastName"></label>
                <input
                  type="text"
                  id="registerLastName"
                  name="registerLastName"
                  placeholder="Soyadınız..."
                  className="form-control shadow-none border-secondary"
                />
              </div>
            </div>
            <div>
              <label htmlFor="registerEmail"></label>
              <input
                type="email"
                className="form-control shadow-none border-secondary"
                id="registerEmail"
                name="registerEmail"
                placeholder="E-posta adresiniz..."
              />
            </div>
            <div>
              <label htmlFor="registerPassword"></label>
              <input
                type="password"
                className="border-secondary shadow-none form-control"
                id="registerPassword"
                name="registerPassword"
                placeholder="Şifreniz..."
              />
            </div>
            <div>
              <label htmlFor="registerPasswordAgain"></label>
              <input
                type="password"
                className="border-secondary shadow-none form-control"
                id="registerPasswordAgain"
                name="registerPasswordAgain"
                placeholder="Şifreniz Tekrar..."
              />
            </div>
            <div>
              <button className="btn btn-info mt-3" type="submit">
                Kayıt Ol
              </button>
            </div>
            <div className="d-flex align-items-center justify-content-center gap-3">
              <p className="mt-3 fst-italic">Sosyal Medya ile Üye Ol</p>
              <div className="d-flex gap-2">
                <button className="btn btn-outline-primary d-flex justify-content-center align-items-center">
                  <BsFacebook />
                </button>
                <button className="btn btn-outline-info d-flex justify-content-center align-items-center">
                  <FcGoogle />
                </button>
                <button className="btn btn-outline-primary d-flex justify-content-center align-items-center">
                  <BsTwitter />
                </button>
              </div>
            </div>
            <div className="d-flex align-items-center justify-content-center gap-3">
              <p className="mt-3 fst-italic">Zaten bir hesabınız var mı?</p>
              <Link
                to={"/auth/login"}
                className="text-decoration-none fst-normal"
              >
                Giriş Yap
              </Link>
            </div>
          </form>
        </div>
        <div className="col-lg-6 col-md-6 col-12 d-flex justify-content-center">
          <img
            src="https://www.gosanangelo.com/gcdn/media/2021/07/16/USATODAY/usatsports/man-packing-a-shipment-box.jpg?width=660&height=440&fit=crop&format=pjpg&auto=webp"
            alt=""
            className="img-fluid rounded-3"
          />
        </div>
      </div>
    </div>
  );
};

export default Register;
