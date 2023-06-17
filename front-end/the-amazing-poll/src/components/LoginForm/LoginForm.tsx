import styles from './LoginForm.module.scss'

import TextInput from '../TextInput/TextInput';
import SubmitButton from '../SubmitButton/SubmitButton';

const LoginForm = () => {
    return (
        <div className={styles.formContainer}>
            <h1 className={styles.title}>Login</h1>
            <form action="">
                <TextInput title='Email' type='email' />
                <TextInput title='Password' type='password' />
                <div className={styles.buttonsHolder}>
                    <SubmitButton />
                </div>
            </form>
        </div>
    );
}

export default LoginForm;
