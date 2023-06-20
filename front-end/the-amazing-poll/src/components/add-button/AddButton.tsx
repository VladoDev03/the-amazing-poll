import { FC, FormEvent } from 'react';
import styles from './AddButton.module.scss'

const AddButton: FC<AddButtonProprs> = (props) => {
    return (
        <button type="button" className={styles.addButton} onClick={props.addHandler}>+</button>
    );
}

interface AddButtonProprs {
    addHandler: (e: FormEvent) => void
}

export default AddButton;
