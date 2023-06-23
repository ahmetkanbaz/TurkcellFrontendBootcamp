import { Link } from "react-router-dom";
import { BsFacebook, BsTwitter } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import logoMonito from "../../../assets/logoMonito.svg";
import { useFormik } from "formik";
import registerSchema from "../../../schemas/registerSchema";
import { Logo, InputDiv } from "../AuthStyle";
import { MdError } from "react-icons/md";
const Register = () => {
  const {
    handleSubmit,
    handleChange,
    handleBlur,
    values,
    touched,
    errors,
    isSubmitting,
  } = useFormik({
    initialValues: {
      registerFirstName: "",
      registerLastName: "",
      registerEmail: "",
      registerPassword: "",
      confirmRegisterPassword: "",
    },
    validationSchema: registerSchema,
    onSubmit: async (values, bag) => {
      await new Promise((r) => setTimeout(r, 1000));
      console.log(values);
      bag.resetForm();
    },
  });
  return (
    <div className="container py-5">
      <div className="row justify-content-center align-items-center gap-3 p-5 bg-body-tertiary rounded-3">
        <div className="col-lg-4 col-md-6 col-12">
          <div className="d-flex gap-3 mb-2">
            <Logo src={logoMonito} alt="" className="img-fluid w-25" />
            <h3>Yeni Kayıt Oluştur</h3>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-lg-6 col-12">
                <InputDiv className="position-relative">
                  <label htmlFor="registerFirstName"></label>
                  <input
                    type="text"
                    className="form-control shadow-none border-secondary"
                    id="registerFirstName"
                    name="registerFirstName"
                    placeholder="Adınız..."
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.registerFirstName}
                    disabled={isSubmitting}
                  />
                  {touched.registerFirstName && errors.registerFirstName && (
                    <div className="text-danger errorMessage position-absolute top-100 start-0">
                      <MdError /> {errors.registerFirstName}
                    </div>
                  )}
                </InputDiv>
              </div>
              <div className="col-lg-6 col-12">
                <InputDiv className="position-relative">
                  <label htmlFor="registerLastName"></label>
                  <input
                    type="text"
                    id="registerLastName"
                    name="registerLastName"
                    placeholder="Soyadınız..."
                    className="form-control shadow-none border-secondary"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.registerLastName}
                    disabled={isSubmitting}
                  />
                  {touched.registerLastName && errors.registerLastName && (
                    <div className="text-danger errorMessage position-absolute top-100 start-0">
                      <MdError /> {errors.registerLastName}
                    </div>
                  )}
                </InputDiv>
              </div>
            </div>
            <InputDiv className="position-relative my-3">
              <label htmlFor="registerEmail"></label>
              <input
                type="email"
                className="form-control shadow-none border-secondary"
                id="registerEmail"
                name="registerEmail"
                placeholder="E-posta adresiniz..."
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.registerEmail}
                disabled={isSubmitting}
              />
              {touched.registerEmail && errors.registerEmail && (
                <div className="text-danger errorMessage position-absolute top-100 start-0">
                  <MdError /> {errors.registerEmail}
                </div>
              )}
            </InputDiv>
            <InputDiv className="position-relative">
              <label htmlFor="registerPassword"></label>
              <input
                type="password"
                className="border-secondary shadow-none form-control"
                id="registerPassword"
                name="registerPassword"
                placeholder="Şifreniz..."
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.registerPassword}
                disabled={isSubmitting}
              />
              {touched.registerPassword && errors.registerPassword && (
                <div className="text-danger errorMessage position-absolute top-100 start-0">
                  <MdError /> {errors.registerPassword}
                </div>
              )}
            </InputDiv>
            <InputDiv className="position-relative my-3">
              <label htmlFor="confirmRegisterPassword"></label>
              <input
                type="password"
                className="border-secondary shadow-none form-control"
                id="confirmRegisterPassword"
                name="confirmRegisterPassword"
                placeholder="Şifreniz Tekrar..."
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.confirmRegisterPassword}
                disabled={isSubmitting}
              />
              {touched.confirmRegisterPassword &&
                errors.confirmRegisterPassword && (
                  <div className="text-danger errorMessage position-absolute top-100 start-0">
                    <MdError /> {errors.confirmRegisterPassword}
                  </div>
                )}
            </InputDiv>
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
