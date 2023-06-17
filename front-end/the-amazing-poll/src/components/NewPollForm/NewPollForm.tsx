import styles from './NewPollForm.module.scss'

import TextInput from '../TextInput/TextInput';
import AddButton from '../AddButton/AddButton';
import SubmitButton from '../SubmitButton/SubmitButton';

const NewPollForm = () => {
    return (
        <div className={styles.formContainer}>
            <h1 className={styles.title}>Create new Poll</h1>
            <form action="">
                <TextInput title='Question' type='text' />
                <div className={styles.optionsHolder}>
                    <TextInput title='Option' type='text' />
                    <AddButton />
                </div>
                <div className={styles.buttonsHolder}>
                    <SubmitButton />
                </div>
            </form>
        </div>
    );
}

export default NewPollForm;
