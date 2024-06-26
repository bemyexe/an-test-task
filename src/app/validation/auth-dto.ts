import * as yup from 'yup';

export const authValidationSchema = yup.object({
  email: yup
    .string()
    .required('Обязательное поле')
    .email('Введите верный email'),
  password: yup
    .string()
    .required('Обязательное поле')
    .min(6, 'Пароль должен содержать минимум 6 символов'),
});
