import styles from './NewPollForm.module.scss'

import TextInput from '../text-input/TextInput';
import AddButton from '../add-button/AddButton';
import SubmitButton from '../submit-button/SubmitButton';
import { ChangeEvent, FC, FormEvent } from 'react';

const NewPollForm: FC<PollFormProps> = (props) => {
    return (
        <div className={styles.formContainer}>
            <h1 className={styles.title}>Create a new Poll</h1>
            <form action="post" onSubmit={props.submitHandler}>
                <TextInput title='Question' type='text' name='title' onChange={props.changeTitleHandler} value={props.title} />
                <div className={styles.optionsHolder}>
                    <TextInput title='Option' type='text' name='choice' onChange={props.changeChoiceHandler} value={props.choice} />
                    <AddButton addHandler={props.addHandler} />
                </div>
                <div className={styles.buttonsHolder}>
                    <SubmitButton />
                </div>
            </form>
        </div>
    );
}

interface PollFormProps {
    addHandler: (e: FormEvent) => void;
    submitHandler: (e: FormEvent) => void;
    changeTitleHandler: (e: ChangeEvent<HTMLInputElement>) => void;
    changeChoiceHandler: (e: ChangeEvent<HTMLInputElement>) => void;
    title: string,
    choice: string,
}

export default NewPollForm;
