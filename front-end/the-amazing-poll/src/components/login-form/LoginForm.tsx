import styles from './LoginForm.module.scss'
import { ChangeEvent, FormEvent, useState } from 'react';
import TextInput from '../text-input/TextInput';
import SubmitButton from '../submit-button/SubmitButton';
import useLocalStorage from '../../hooks/useLocalStorage';
import UserLogin from '../../models/UserLogin';
import * as authServices from '../../services/authServices';

const LoginForm = () => {
    const [userLogin, setUserLogin] = useState(new UserLogin('', ''));
    const [, setAuth] = useLocalStorage('auth', {})

    const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;

        setUserLogin((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const submitHandler = async (e: FormEvent) => {
        e.preventDefault();

        const resultData = await authServices.login(userLogin);

        setAuth(resultData);
    }

    return (
        <div className={styles.formContainer}>
            <h1 className={styles.title}>Login</h1>
            <form action="post" onSubmit={submitHandler}>
                <TextInput title='Email' type='email' name='email' value={userLogin.email} onChange={changeHandler} />
                <TextInput title='Password' type='password' name='password' value={userLogin.password} onChange={changeHandler} />
                <div className={styles.buttonsHolder}>
                    <SubmitButton />
                </div>
            </form>
        </div>
    );
}

export default LoginForm;
