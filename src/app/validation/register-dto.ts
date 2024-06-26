import * as yup from 'yup';

export const registrationValidationSchema = yup.object({
  name: yup.string().required('Обязательное поле'),
  email: yup
    .string()
    .required('Обязательное поле')
    .email('Введите верный email'),
  password: yup
    .string()
    .required('Обязательное поле')
    .min(6, 'Пароль должен содержать минимум 6 символов'),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password'), undefined], 'Пароли должны совпадать')
    .required('Обязательное поле'),
});
