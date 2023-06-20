import styles from './NewPoll.module.scss'

import Preview from '../preview/Preview';
import NewPollForm from '../new-poll-form/NewPollForm';
import { ChangeEvent, FormEvent, useState } from 'react';
import Choice from '../../models/Choice';

const NewPoll = () => {
    const [choices, setChoices] = useState<Choice[]>([]);
    const [title, setTitle] = useState<string>('');
    const [choice, setChoice] = useState<string>('');

    const addChoiceHandler = (e: FormEvent) => {
        e.preventDefault();

        const newChoice: Choice = new Choice(choice, 0);

        setChoices(oldChoices => [...oldChoices, newChoice]);
        setChoice('');
    };

    const changeTitleHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.target.value);
    };

    const changeChoiceHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setChoice(e.target.value);
    };

    const submitHandler = (e: FormEvent) => {
        e.preventDefault();

        console.log({
            title: title,
            choices: choices
        });
    }

    return (
        <div className={styles.container}>
            <NewPollForm
                addHandler={addChoiceHandler}
                changeTitleHandler={changeTitleHandler}
                changeChoiceHandler={changeChoiceHandler}
                title={title}
                choice={choice}
                submitHandler={submitHandler} />
            <Preview choices={choices} title={title} />
        </div>
    );
}

export default NewPoll;
