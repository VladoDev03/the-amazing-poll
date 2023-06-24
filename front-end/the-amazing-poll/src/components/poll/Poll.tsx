import styles from './Poll.module.scss'
import { useParams } from "react-router-dom";
import ChoicesList from "../choice-list/ChoicesList";
import Choice from '../../models/Choice';

const Poll = () => {
    const { id } = useParams();

    const asd = [
        new Choice('asd', 0),
        new Choice('asd', 0),
        new Choice('asd', 0),
        new Choice('asd', 0),
        new Choice('asd', 0)
    ]

    return (
        <div className={styles.container}>
            <div className={styles.poll}>
                <h1 className={styles.title}>{id}</h1>
                <ChoicesList items={asd} />
            </div>
        </div>
    );
};

export default Poll;
