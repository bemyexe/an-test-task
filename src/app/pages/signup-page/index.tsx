import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';

import { STRINGS } from '../../../constants/strings';
import { RegisterRequest } from '../../../services/auth.service/requests/requests';
import { useAppDispatch } from '../../../store';
import { registerSelectors } from '../../../store/register/register.selectors';
import { register } from '../../../store/register/register.thunks';
import { Button } from '../../components/shared/button';
import { Input } from '../../components/shared/input';
import { Page } from '../../components/shared/page';
import { registrationValidationSchema } from '../../validation/register-dto';

import './style.scss';

export const SignUpPage = () => {
  const dispatch = useAppDispatch();
  const registerLoading = useSelector(registerSelectors.selectRegisterLoading);
  const registerError = useSelector(registerSelectors.selectRegisterError);
  const registerSuccess = useSelector(registerSelectors.selectRegisterSuccess);
  const navigate = useNavigate();

  const { values, handleChange, handleSubmit, errors } =
    useFormik<RegisterRequest>({
      initialValues: {
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
      },
      onSubmit: ({ email, password }) => {
        dispatch(register({ email, password }));
      },
      validationSchema: registrationValidationSchema,
      validateOnChange: false,
    });

  useEffect(() => {
    if (registerSuccess) {
      navigate('/main');
    }
  }, [registerSuccess, navigate]);

  return (
    <Page className="signUp-page">
      <div className="signUp-main">
        <h1 className="signUp-title">{STRINGS.title}</h1>
        <form className="signUp-form" method="post">
          <Input
            title={STRINGS.name}
            value={values.name}
            error={errors.name}
            onChange={handleChange('name')}
            placeholder={STRINGS.nameExample}
          />
          <Input
            title={STRINGS.email}
            value={values.email}
            error={errors.email}
            onChange={handleChange('email')}
            placeholder={STRINGS.emailExample}
          />
          <Input
            title={STRINGS.password}
            value={values.password}
            error={values.password.length < 6 ? errors.password : ''}
            onChange={handleChange('password')}
            placeholder={STRINGS.hiddenPass}
            type="password"
          />
          <Input
            title={STRINGS.confirmPass}
            value={values.confirmPassword}
            error={errors.confirmPassword}
            onChange={handleChange('confirmPassword')}
            type="password"
            placeholder={STRINGS.hiddenPass}
          />
          {registerError && (
            <div className="signUp-error">{STRINGS.registerError}</div>
          )}
          <Button
            title={STRINGS.registration}
            onClick={handleSubmit}
            className="signUp-button"
            loading={registerLoading}
          >
            {STRINGS.registration}
          </Button>
        </form>
        <div className="link-to-auth">
          {STRINGS.hasAccount}
          <Link className="link-to-auth-text" to={'/auth'}>
            {STRINGS.logIn}
          </Link>
        </div>
      </div>
    </Page>
  );
};
