import styles from './NewPollForm.module.scss'

import TextInput from '../TextInput/TextInput';

const NewPollForm = () => {
    return (
        <div className={styles.formContainer}>
            <h1 className={styles.title}>Create new Poll</h1>
            <form action="">
                <TextInput title='Question' />
                <TextInput title='Option' />
            </form>
        </div>
    );
}

export default NewPollForm;
