import styles from './Preview.module.scss'

import { FC } from 'react';
import ChoicesList from '../choice-list/ChoicesList';
import Choice from '../../models/Choice';

const Preview: FC<PreviewProps> = (props) => {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>{props.title}</h1>
            <ChoicesList items={props.choices} />
        </div>
    );
}

interface PreviewProps {
    title: string
    choices: Choice[]
}

export default Preview;
