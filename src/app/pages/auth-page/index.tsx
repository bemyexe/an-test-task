import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useFormik } from 'formik';

import { SIGN_PAGE_STRINGS } from '../../../constants/strings';
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

  return (
    <Page className="auth-page">
      <div className="auth-main">
        <h1 className="auth-title">Авторизация</h1>
        <form className="auth-form">
          <Input
            value={values.email}
            error={errors.email}
            onChange={handleChange('email')}
            placeholder={SIGN_PAGE_STRINGS.emailExample}
            title={SIGN_PAGE_STRINGS.email}
          />
          <Input
            value={values.password}
            error={errors.password}
            onChange={handleChange('password')}
            placeholder={SIGN_PAGE_STRINGS.hiddenPass}
            type="password"
            title={SIGN_PAGE_STRINGS.password}
          />
          {authError && (
            <div className="auth-error">{SIGN_PAGE_STRINGS.loginError}</div>
          )}
          <Button
            onClick={() => handleSubmit()}
            title={SIGN_PAGE_STRINGS.logIn}
            className="auth-button"
            loading={authLoading}
          >
            {SIGN_PAGE_STRINGS.logIn}
          </Button>
        </form>
        <div className="redirect">
          {SIGN_PAGE_STRINGS.noAccount}
          <Link to={'/'}>{SIGN_PAGE_STRINGS.registration}</Link>
        </div>
      </div>
    </Page>
  );
};
