import styles from './NewPollForm.module.scss'

import TextInput from '../text-input/TextInput';
import AddButton from '../add-button/AddButton';
import SubmitButton from '../submit-button/SubmitButton';

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
