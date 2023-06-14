import styles from './TextInput.module.scss'

const TextInput:React.FC<Vote> = (props) => {
    return (
        <div className={styles.inputContainer}>
            <input className={styles.textField} placeholder={props.title} type="text" />
        </div>
    );
}

interface Vote {
    title: string,
}

export default TextInput;
