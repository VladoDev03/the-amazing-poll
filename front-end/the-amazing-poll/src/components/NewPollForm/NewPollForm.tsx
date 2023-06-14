import styles from './NewPollForm.module.scss'

import TextInput from '../TextInput/TextInput';

const NewPollForm = () => {
    return (
        <div className={styles.formContainer}>
            <form action="">
                <TextInput title='Question' />
                <TextInput title='Option' />
            </form>
        </div>
    );
}

export default NewPollForm;
