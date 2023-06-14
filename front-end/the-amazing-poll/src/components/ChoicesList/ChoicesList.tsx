import styles from './ChoicesList.module.scss'

import ChoiceItem from '../ChoiceItem/ChoiceItem';

import Choice from '../../models/Choice'

const ChoicesList: React.FC<{ items: Choice[] }> = (props) => {
    return (
        <div className={styles.choicesList}>
            <ul className={styles.options}>
                {props.items.map((item, index) => (
                    <ChoiceItem key={index} title={item.title} percentage={item.percentage} />
                ))}
            </ul>
        </div>
    );
}

export default ChoicesList;
