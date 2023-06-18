import styles from './RegisterForm.module.scss'
import TextInput from '../text-input/TextInput';
import SubmitButton from '../submit-button/SubmitButton';
import { ChangeEvent, FormEvent, useState } from 'react';
import UserRegister from '../../models/UserRegister';
import * as authServices from '../../services/authServices';

const RegisterForm = () => {
    const [userRegister, setUserRegister] = useState(new UserRegister('', '', '', ''));

    const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;

        setUserRegister((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const submitHandler = async (e: FormEvent) => {
        e.preventDefault();
        await authServices.register(userRegister);
    }

    return (
        <div className={styles.formContainer}>
            <h1 className={styles.title}>Register</h1>
            <form action="post" onSubmit={submitHandler}>
                <TextInput title='Username' type='text' name='username' value={userRegister.username} onChange={changeHandler} />
                <TextInput title='Email' type='email' name='email' value={userRegister.email} onChange={changeHandler} />
                <TextInput title='Password' type='password' name='password' value={userRegister.password} onChange={changeHandler} />
                <TextInput title='Confirm Password' type='password' name='confirmPassword' value={userRegister.confirmPassword} onChange={changeHandler} />
                <div className={styles.buttonsHolder}>
                    <SubmitButton />
                </div>
            </form>
        </div>
    );
}

export default RegisterForm;
