import { ChangeEvent, FC, useMemo, useState } from 'react';
import classNames from 'classnames';
import { v4 as uuidv4 } from 'uuid';

import { Icon } from '../icon';
import { Icons } from '../icon/enum/icon-enum';

import './style.scss';

interface IInputProps {
  title: string;
  value: string;
  type?: 'password';
  placeholder?: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  error?: string;
}

export const Input: FC<IInputProps> = ({
  title,
  value,
  type,
  placeholder,
  onChange,
  error,
}) => {
  {
    const [passwordHide, setPasswordHide] = useState<boolean>(true);
    const uniqueId = useMemo(() => `input_${uuidv4()}`, []);

    const getType = (): string | undefined =>
      type === 'password' && !passwordHide ? undefined : type;

    const handleChangeHidePassword = () => {
      setPasswordHide((prevState) => !prevState);
    };

    return (
      <div className="input-component">
        <label htmlFor={uniqueId} className="input-title">
          {title}
        </label>
        <div className={classNames('input-field', { error: !!error })}>
          <input
            id={uniqueId}
            className="input-text"
            type={getType()}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
          />
          {type === 'password' && (
            <Icon
              className="input-icon"
              onClick={() => handleChangeHidePassword()}
              name={passwordHide ? Icons.eyeOff : Icons.eye}
            />
          )}
        </div>
        {error && <div className="error-text">{error}</div>}
      </div>
    );
  }
};
