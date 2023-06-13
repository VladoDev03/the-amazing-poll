import styles from './NewPoll.module.scss'

import Preview from '../Preview/Preview';

const NewPoll = () => {
    return (
        <div className={styles.container}>
            <h1>There should be a form here...</h1>
            <Preview />
        </div>
    );
}

export default NewPoll;
