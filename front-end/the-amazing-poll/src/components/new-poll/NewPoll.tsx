import styles from './NewPoll.module.scss'

import Preview from '../preview/Preview';
import NewPollForm from '../new-poll-form/NewPollForm';

const NewPoll = () => {
    return (
        <div className={styles.container}>
            <NewPollForm />
            <Preview />
        </div>
    );
}

export default NewPoll;
