import styles from './ChoiceItem.module.scss'

import Choice from '../../models/Choice'

const ChoiceItem: React.FC<Choice> = (props) => {
    return (
        <li className={styles.choiceContainer}>
            <div className={styles.progress} style={{width: `${props.percentage}%`}}>
                <h3 className={styles.title}>{props.title}</h3>
                <h4 className={styles.percentage}>{`${props.percentage}%`}</h4>
            </div>
        </li>
    );
}

export default ChoiceItem;
