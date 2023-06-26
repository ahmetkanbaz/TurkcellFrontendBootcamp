import { toast } from 'react-toastify';

const Toast = ({ message, type }) => {
  return toast(message, {
    type: type,
  });
}

export default Toast;
