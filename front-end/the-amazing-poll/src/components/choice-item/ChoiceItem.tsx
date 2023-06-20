import styles from './ChoiceItem.module.scss'

const ChoiceItem: React.FC<ChoiceItemProps> = (props) => {
    return (
        <li className={styles.choiceContainer}>
            <div className={styles.progress} style={{width: `${props.percentage}%`}}>
                <h3 className={styles.title}>{props.title}</h3>
                <h4 className={styles.percentage}>{`${props.percentage}%`}</h4>
            </div>
        </li>
    );
}

interface ChoiceItemProps {
    title: string,
    percentage: number
}

export default ChoiceItem;
