import * as yup from 'yup'

const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;

const loginSchema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().min(5).matches(passwordRules, {
    message: 'Şifreniz en az bir büyük harf, bir küçük harf ve bir rakam içermelidir.'
  }),
})

export default loginSchema