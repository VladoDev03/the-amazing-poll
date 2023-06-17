import styles from './RegisterForm.module.scss'

import TextInput from '../text-input/TextInput';
import SubmitButton from '../submit-button/SubmitButton';

const RegisterForm = () => {
    return (
        <div className={styles.formContainer}>
            <h1 className={styles.title}>Register</h1>
            <form action="">
                <TextInput title='Username' type='text' />
                <TextInput title='Email' type='email' />
                <TextInput title='Password' type='password' />
                <TextInput title='Confirm Password' type='password' />
                <div className={styles.buttonsHolder}>
                    <SubmitButton />
                </div>
            </form>
        </div>
    );
}

export default RegisterForm;
