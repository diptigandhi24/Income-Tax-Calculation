import React, { useState } from 'react';
import { TextFeild, Button } from './FormInput';
import './form.css';
import login from '../server/loginresponse';
import { saveTaxInfo, getData } from '../Indexdb/indexdb';
import { useHistory } from 'react-router-dom';
const LoginForm: React.FC = (): JSX.Element => {
  const [name, updateName] = useState('');
  const [password, updatePassword] = useState('');
  const history = useHistory();
  const handleChange = (value: string, setState: React.Dispatch<React.SetStateAction<string>>): void => setState(value);
  const handleSubmit = () => {
    login(name, password).then(response => {
      if (response.login === true) {
        console.log('success', response);

        history.push({ pathname: `/dashboard`, state: { ...response } });
      }
    });
  };
  return (
    <form className="vertical-form">
      <TextFeild
        type={'text'}
        labelText={'Name'}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => handleChange(event.target.value, updateName)}
        value={name}
        placeholder={'Enter your name'}
      />
      <TextFeild
        type={'password'}
        labelText={'Password'}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => handleChange(event.target.value, updatePassword)}
        value={password}
        placeholder={'Enter a password'}
      />
      <Button type="button" onClick={handleSubmit} content="Login" />
    </form>
  );
};
export default LoginForm;
