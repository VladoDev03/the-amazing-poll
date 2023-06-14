import styles from './NewPoll.module.scss'

import Preview from '../Preview/Preview';
import NewPollForm from '../NewPollForm/NewPollForm';

const NewPoll = () => {
    return (
        <div className={styles.container}>
            <NewPollForm />
            <Preview />
        </div>
    );
}

export default NewPoll;
