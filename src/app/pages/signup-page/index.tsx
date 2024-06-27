import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useFormik } from 'formik';

import { SIGN_PAGE_STRINGS } from '../../../constants/strings';
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

  return (
    <Page className="signUp-page">
      <div className="signUp-main">
        <h1 className="signUp-title">{SIGN_PAGE_STRINGS.title}</h1>
        <form className="signUp-form" method="post">
          <Input
            title={SIGN_PAGE_STRINGS.name}
            value={values.name}
            error={errors.name}
            onChange={handleChange('name')}
            placeholder={SIGN_PAGE_STRINGS.nameExample}
          />
          <Input
            title={SIGN_PAGE_STRINGS.email}
            value={values.email}
            error={errors.email}
            onChange={handleChange('email')}
            placeholder={SIGN_PAGE_STRINGS.emailExample}
          />
          <Input
            title={SIGN_PAGE_STRINGS.password}
            value={values.password}
            error={values.password.length < 6 ? errors.password : ''}
            onChange={handleChange('password')}
            placeholder={SIGN_PAGE_STRINGS.hiddenPass}
            type="password"
          />
          <Input
            title={SIGN_PAGE_STRINGS.confirmPass}
            value={values.confirmPassword}
            error={errors.confirmPassword}
            onChange={handleChange('confirmPassword')}
            type="password"
            placeholder={SIGN_PAGE_STRINGS.hiddenPass}
          />
          {registerError && (
            <div className="signUp-error">
              {SIGN_PAGE_STRINGS.registerError}
            </div>
          )}
          <Button
            title={SIGN_PAGE_STRINGS.registration}
            onClick={handleSubmit}
            className="signUp-button"
            loading={registerLoading}
          >
            {SIGN_PAGE_STRINGS.registration}
          </Button>
        </form>
        <div className="redirect">
          {SIGN_PAGE_STRINGS.hasAccount}
          <Link to={'/auth'}>{SIGN_PAGE_STRINGS.logIn}</Link>
        </div>
      </div>
    </Page>
  );
};
