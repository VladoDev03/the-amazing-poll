import styles from './NewPoll.module.scss'
import Preview from '../preview/Preview';
import NewPollForm from '../new-poll-form/NewPollForm';
import { ChangeEvent, FormEvent, useState } from 'react';
import Choice from '../../models/Choice';
import PreviewTitle from '../preview-title/PreviewTitle';
import * as randomNumbersWithSum from '../../utils/randomNumbersWithSum';
import * as stringValidations from '../../utils/stringValidations';

const NewPoll = () => {
    const [choices, setChoices] = useState<Choice[]>([]);
    const [title, setTitle] = useState<string>('');
    const [choice, setChoice] = useState<string>('');

    const addChoiceHandler = (e: FormEvent) => {
        e.preventDefault();

        if (stringValidations.isEmpty(choice)) {
            return;
        }

        const newChoice: Choice = new Choice(choice, 0);

        setChoices(oldChoices => {
            const percentages = randomNumbersWithSum.getPercentages(oldChoices.length + 1, 100);

            const newChoices = [...oldChoices, newChoice]
                .map((x, index) => {
                    x.percentage = percentages[index];
                    return x;
                });

            return newChoices;
        });

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
            {choices.length === 0 && stringValidations.isEmpty(title)
                ? <PreviewTitle />
                : <Preview choices={choices} title={title} />}
        </div>
    );
}

export default NewPoll;
