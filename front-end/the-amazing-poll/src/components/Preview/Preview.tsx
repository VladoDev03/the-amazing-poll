import styles from './Preview.module.scss'

import ChoicesList from '../ChoicesList/ChoicesList';

import Choice from '../../models/Choice';

const Preview = () => {
    const items: Choice[] = [
        new Choice("C#", 35),
        new Choice("JS", 25),
        new Choice("TS", 20),
        new Choice("C++", 15),
        new Choice("Kotlin", 5)
    ]

    return (
        <div>
            <h1 className={styles.title}>Languages</h1>
            <ChoicesList items={items} />
        </div>
    );
}

export default Preview;
