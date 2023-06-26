import {BsFacebook, BsTwitter, BsInstagram, BsYoutube} from 'react-icons/bs'
const FooterMenu = () => {
  return (
    <div className="footerMenu">
      <div className="d-flex justify-content-lg-between justify-content-center flex-wrap gap-4 gap-lg-0 align-items-center">
        <div className="d-flex footerMenuItems">
          <span>Home</span>
          <span>Category</span>
          <span>About</span>
          <span>Contact</span>
        </div>
        <div className="d-flex footerMenuItems">
          <BsFacebook />
          <BsTwitter />
          <BsInstagram />
          <BsYoutube />
        </div>
      </div>
    </div>
  );
};

export default FooterMenu;
