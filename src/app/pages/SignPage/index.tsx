import { Button } from '../../components/shared/button';
import { Input } from '../../components/shared/input';
import { Page } from '../../components/shared/page';

import './style.scss';

enum Strings {
  title = 'Регистрация',
  registration = 'Зарегистрироваться',
  name = 'Имя',
  email = 'Электронная почта',
  password = 'Пароль',
  confirmPass = 'Подтвердите пароль',
  nameExample = 'Введите имя, например: Артур',
  emailExample = 'example@mail.ru',
  passExample = '******',
}

export const SignPage = () => {
  return (
    <Page className="signUp-page">
      <div className="signUp-main">
        <h1 className="signUp-title">{Strings.title}</h1>
        <form className="signUp-form" method="post">
          <Input
            title={Strings.name}
            value={''}
            error={''}
            placeholder={Strings.nameExample}
          />
          <Input
            title={Strings.email}
            value={''}
            error={''}
            placeholder={Strings.emailExample}
          />
          <Input
            title={Strings.password}
            value={''}
            error={''}
            placeholder={Strings.passExample}
            type="password"
          />
          <Input
            title={Strings.confirmPass}
            value={''}
            error={''}
            type="password"
            placeholder="******"
          />
          <Button
            title={Strings.registration}
            onClick={() => {}}
            className="signUp-button"
          >
            {Strings.registration}
          </Button>
        </form>
      </div>
    </Page>
  );
};
