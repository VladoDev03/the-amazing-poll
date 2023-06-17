import styles from './LoginForm.module.scss'
import TextInput from '../text-input/TextInput';
import SubmitButton from '../submit-button/SubmitButton';
import { ChangeEvent, FormEvent, useState } from 'react';
import UserLogin from '../../models/UserLogin';

const LoginForm = () => {
    const [userLogin, setUserLogin] = useState(new UserLogin('', ''));

    const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;

        setUserLogin((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const submitHandler = (e: FormEvent) => {
        e.preventDefault();
        console.log(userLogin);
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
