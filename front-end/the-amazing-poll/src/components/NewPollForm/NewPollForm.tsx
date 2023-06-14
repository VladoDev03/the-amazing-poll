import styles from './NewPollForm.module.scss'

import TextInput from '../TextInput/TextInput';
import AddButton from '../AddButton';

const NewPollForm = () => {
    return (
        <div className={styles.formContainer}>
            <h1 className={styles.title}>Create new Poll</h1>
            <form action="">
                <TextInput title='Question' />
                <div className={styles.optionHolder}>
                    <TextInput title='Option' />
                    <AddButton />
                </div>
            </form>
        </div>
    );
}

export default NewPollForm;
