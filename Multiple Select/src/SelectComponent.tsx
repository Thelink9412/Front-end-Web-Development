import styles from './assets/select.module.css'

type SelectOption = {
    label: string,
    value: number,
}

type SelectProps = {
    value?: SelectOption,
    onChange: (value?: SelectOption) => void,
    options: SelectOption[],
}

export default function SelectComponent({ value, onChange, options} : SelectProps) {
    return (
    <div tabIndex={0} className={styles.container}>
        <span className={styles.value}>Value</span>
        <button className={styles["clear-btn"]}>&times;</button>
        <div className={styles.divider}></div>
        <div className={styles.caret}></div>
        <ul className={styles["options-list"]}>
            {options.map(option => (
                <li key={option.value} className={styles.option}>{option.label}</li>
            ))}
        </ul>
    </div>
    )
}