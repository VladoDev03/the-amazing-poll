import styles from './TextInput.module.scss'

const TextInput:React.FC<Vote> = (props) => {
    return (
        <div className={styles.inputContainer}>
            <input className={styles.textField} placeholder={props.title} type={props.type} />
        </div>
    );
}

interface Vote {
    title: string,
    type: string
}

export default TextInput;
