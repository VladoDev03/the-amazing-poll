import styles from './ChoicesList.module.scss'

import ChoiceItem from '../Choice/ChoiceItem';

import Choice from '../../models/Choice'

const ChoicesList: React.FC<{ items: Choice[] }> = (props) => {
    return (
        <div className={styles.choicesList}>
            {props.items.map((item, index) => (
                <ChoiceItem key={index} title={item.title} percentage={item.percentage} />
            ))}
        </div>
    );
}

export default ChoicesList;
