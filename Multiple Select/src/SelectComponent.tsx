import { useEffect, useRef, useState } from "react";
import styles from "./assets/select.module.css";

export type SelectOption = {
  label: string;
  value: number | string;
};

type MultipleSelectProps = {
  multiple: true;
  value: SelectOption[];
  onChange: (value: SelectOption[]) => void;
};

type SingleSelectProps = {
  multiple?: false;
  value?: SelectOption;
  onChange: (value?: SelectOption) => void;
};

type SelectProps = {
  options: SelectOption[];
} & (MultipleSelectProps | SingleSelectProps);

export default function SelectComponent({
  multiple,
  value,
  onChange,
  options,
}: SelectProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [highlightedIndex, setHighlightedIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  function clearOptions() {
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    multiple ? onChange([]) : onChange(undefined);
  }

  function selectOption(option: SelectOption) {
    if (multiple) {
      if (value.includes(option)) onChange(value.filter((o) => o !== option));
      else onChange([...value, option]);
    } else if (option !== value) onChange(option);
  }

  function isOptionSelected(option: SelectOption) {
    return multiple ? value.includes(option) : option === value;
  }

  useEffect(() => {
    if (isOpen) setHighlightedIndex(0);
  }, [isOpen]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.target !== containerRef.current) return;

      switch (e.code) {
        case "Enter":
        case "Space":
          e.preventDefault();
          if (!isOpen) {
            setIsOpen(true);
          } else {
            selectOption(options[highlightedIndex]);
            setIsOpen(false);
          }

          break;
        case "ArrowUp":
        case "ArrowDown": {
          e.preventDefault();
          if (!isOpen) {
            setIsOpen(true);
            break;
          }
          const newValue = highlightedIndex + (e.code === "ArrowDown" ? 1 : -1);
          if (newValue >= 0 && newValue < options.length) {
            setHighlightedIndex(newValue);
          }
          break;
        }
      }
    };
    containerRef.current?.addEventListener("keydown", handler);

    return () => {
      containerRef.current?.removeEventListener("keydown", handler);
    };
  }, [isOpen, highlightedIndex, options]);
  return (
    <div
      ref={containerRef}
      tabIndex={0}
      className={styles.container}
      onBlur={() => setIsOpen(false)}
    >
      <span className={styles.value}>
        {multiple
          ? value.map((v, index) => (
              <button
                key={index}
                onClick={(e) => {
                  e.stopPropagation();
                  selectOption(v);
                }}
                className={styles["option-badge"]}
              >
                {v.label}
                <span className={styles["remove-btn"]}>&times;</span>
              </button>
            ))
          : value?.label}
      </span>
      <button
        className={styles["clear-btn"]}
        onClick={(e) => {
          e.stopPropagation();
          clearOptions();
        }}
      >
        &times;
      </button>
      <div className={styles.divider}></div>
      <div
        className={styles.caret}
        onClick={() => setIsOpen((prev) => !prev)}
      ></div>
      <ul className={`${styles["options-list"]} ${isOpen ? styles.show : ""}`}>
        {options.map((option, index) => (
          <li
            key={option.value}
            className={`${styles.option} ${isOptionSelected(option) ? styles.selected : ""} 
                        ${index === highlightedIndex ? styles.highlighted : ""}`}
            onMouseEnter={() => setHighlightedIndex(index)}
            onClick={(e) => {
              e.stopPropagation();
              selectOption(option);
              setIsOpen(false);
            }}
          >
            {option.label}
          </li>
        ))}
      </ul>
    </div>
  );
}
