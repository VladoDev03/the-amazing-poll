import styles from './TextInput.module.scss'

const TextInput:React.FC<TextInputProps> = (props) => {
    return (
        <div className={styles.inputContainer}>
            <input
                className={styles.textField}
                placeholder={props.title}
                type={props.type}
                name={props.name}
                onChange={props.onChange}
                value={props.value} />
        </div>
    );
}

interface TextInputProps {
    title: string,
    type: string,
    value: string,
    name: string,
    onChange: any
}

export default TextInput;
