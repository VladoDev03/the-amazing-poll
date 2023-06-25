import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ChoicesList from '../choice-list/ChoicesList';
import * as pollServices from '../../services/pollServices';
import Poll from '../../models/Poll';
import styles from './PollPage.module.scss';

const PollPage = () => {
    const [poll, setPoll] = useState<Poll>();
    const [loading, setLoading] = useState(true);
    const { id } = useParams();

    useEffect(() => {
        pollServices.getById(id!).then(data => {
            setPoll(data);
            setLoading(false);
        });
    }, [id]);

    return (
        <div className={styles.container}>
            {loading
                ? <h1>Loading . . .</h1>
                : <div className={styles.poll}>
                    <h1 className={styles.title}>{poll?.title}</h1>
                    {poll?.choices && <ChoicesList items={poll?.choices} />}
                </div>}
        </div>
    );
};

export default PollPage;
