import styles from './RegisterForm.module.scss'

import TextInput from '../text-input/TextInput';
import SubmitButton from '../submit-button/SubmitButton';

const RegisterForm = () => {
    return (
        <div className={styles.formContainer}>
            <h1 className={styles.title}>Register</h1>
            <form action="">
                <TextInput title='Username' type='text' name='' onChange={console.log} value='' />
                <TextInput title='Email' type='email' name='' onChange={console.log} value='' />
                <TextInput title='Password' type='password' name='' onChange={console.log} value='' />
                <TextInput title='Confirm Password' type='password' name='' onChange={console.log} value='' />
                <div className={styles.buttonsHolder}>
                    <SubmitButton />
                </div>
            </form>
        </div>
    );
}

export default RegisterForm;
