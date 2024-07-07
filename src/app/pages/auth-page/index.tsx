import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';

import { STRINGS } from '../../../constants/strings';
import { useAppDispatch } from '../../../store';
import { authSelectors } from '../../../store/auth/auth.selectors';
import { login } from '../../../store/auth/auth.thunks';
import { Button } from '../../components/shared/button';
import { Input } from '../../components/shared/input';
import { Page } from '../../components/shared/page';
import { authValidationSchema } from '../../validation/auth-dto';

import './style.scss';

export const AuthPage = () => {
  const dispatch = useAppDispatch();
  const authLoading = useSelector(authSelectors.selectLoginLoading);
  const authError = useSelector(authSelectors.selectLoginError);
  const authSuccess = useSelector(authSelectors.selectLoginSuccess);
  const navigate = useNavigate();

  const { values, handleChange, handleSubmit, errors } = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: (values) => {
      dispatch(login(values));
    },
    validationSchema: authValidationSchema,
    validateOnChange: false,
  });

  useEffect(() => {
    if (authSuccess) {
      navigate('/main');
    }
  }, [authSuccess, navigate]);

  return (
    <Page className="auth-page">
      <div className="auth-main">
        <h1 className="auth-title">Авторизация</h1>
        <span>eve.holt@reqres.in</span>
        <form className="auth-form">
          <Input
            value={values.email}
            error={errors.email}
            onChange={handleChange('email')}
            placeholder={STRINGS.emailExample}
            title={STRINGS.email}
          />
          <Input
            value={values.password}
            error={errors.password}
            onChange={handleChange('password')}
            placeholder={STRINGS.hiddenPass}
            type="password"
            title={STRINGS.password}
          />
          {authError && <div className="auth-error">{STRINGS.loginError}</div>}
          <Button
            onClick={() => handleSubmit()}
            title={STRINGS.logIn}
            className="auth-button"
            loading={authLoading}
          >
            {STRINGS.logIn}
          </Button>
        </form>
        <div className="link-to-register">
          {STRINGS.noAccount}
          <Link className="link-to-register-text" to={'/signup'}>
            {STRINGS.registration}
          </Link>
        </div>
      </div>
    </Page>
  );
};
