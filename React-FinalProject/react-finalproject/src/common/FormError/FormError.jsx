import PropTypes from 'prop-types'
import {MdError} from 'react-icons/md'
const FormError = ({message}) => {
  return (
    <div className='position-absolute text-danger top-100 start-0'>
      <MdError /> {message}
    </div>
  )
}

FormError.propTypes = {
  message: PropTypes.string
}

export default FormError