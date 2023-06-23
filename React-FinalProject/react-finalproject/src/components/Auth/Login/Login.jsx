import { Link } from "react-router-dom";
import { BsFacebook, BsTwitter } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import styled from "styled-components";
import logoMonito from '../../../assets/logoMonito.svg'
const Login = () => {
  const Logo = styled.img`
    transform: rotate(-25deg);
  `;
  return (
    <div className="container py-lg-5">
      <div className="row justify-content-center align-items-center bg-body-tertiary p-5 rounded-3 gap-3">
        <div className="col-lg-6 col-md-6 col-12 d-flex justify-content-center mb-4 mb-lg-0">
          <img
            src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
            alt=""
            className="img-fluid rounded"
          />
        </div>
        <div className="col-lg-4 col-md-6 col-12">
          <div>
            <div className="d-flex gap-4 mb-4">
              <Logo src={logoMonito} alt="" className="img-fluid w-25"/>
              <h2 className="text-center">Giriş Yap</h2>
            </div>
            <form>
              <div>
                <label htmlFor="loginEmail"></label>
                <input
                  type="email"
                  id="loginEmail"
                  name="loginEmail"
                  placeholder="E-Posta Adresiniz..."
                  className="form-control shadow-none border-secondary"
                />
              </div>
              <div>
                <label htmlFor="loginPassword"></label>
                <input
                  type="password"
                  id="loginPassword"
                  name="loginPassword"
                  placeholder="Şifreniz..."
                  className="form-control shadow-none border-secondary"
                />
              </div>
              <div className="d-flex justify-content-end align-items-center mt-1 mb-3">
                <Link
                  to="/forgot-password"
                  className="text-decoration-none text-black fst-bold"
                >
                  Şifremi Unuttum
                </Link>
              </div>
              <div className="mt-4">
                <p className="fst-italic text-center">
                  Sosyal Medya İle Giriş Yap
                </p>
                <div className="d-flex justify-content-center gap-2">
                  <button
                    type="button"
                    className="btn btn-outline-primary d-flex justify-content-center align-items-center"
                  >
                    <BsFacebook />
                  </button>
                  <button
                    type="button"
                    className="btn btn-outline-info d-flex justify-content-center align-items-center"
                  >
                    <FcGoogle />
                  </button>
                  <button
                    type="button"
                    className="btn btn-outline-primary d-flex justify-content-center align-items-center"
                  >
                    <BsTwitter />
                  </button>
                </div>
              </div>
              <div className="d-flex justify-content-end align-items-center my-3">
                <button type="submit" className="btn btn-info">
                  Giriş Yap
                </button>
              </div>
              <div className="d-flex justify-content-center gap-3">
                <p className="fst-italic align-self-center">
                  Hesabınız Yok Mu?
                </p>
                <Link
                  to="/auth/register"
                  className="text-decoration-none fst-normal"
                >
                  Kayıt Ol
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
