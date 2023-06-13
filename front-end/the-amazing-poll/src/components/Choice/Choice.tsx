import styles from './Choice.module.scss'

const Choice: React.FC<ChoiceProps> = (props) => {
    return (
        <div className={styles.choiceContainer}>
            <h3 className={styles.title}>{props.title}</h3>
            <h4 className={styles.percentage}>{`${props.percentage}%`}</h4>
        </div>
    );
}

interface ChoiceProps extends React.PropsWithChildren {
    title: string,
    percentage: number
}

export default Choice;
