import styles from './Choice.module.scss'

import Choice from '../../models/Choice'

const ChoiceItem: React.FC<Choice> = (props) => {
    return (
        <div className={styles.choiceContainer}>
            <h3 className={styles.title}>{props.title}</h3>
            <h4 className={styles.percentage}>{`${props.percentage}%`}</h4>
        </div>
    );
}

export default ChoiceItem;
