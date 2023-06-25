import FooterForm from './FooterForm/FooterForm'
import {FooterContainer} from './FooterStyle'
const Footer = () => {
  return (
    <FooterContainer>
      <div className="container py-5">
        <FooterForm />
      </div>
    </FooterContainer>
  )
}

export default Footer