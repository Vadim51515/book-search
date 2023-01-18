import classNames from "classnames";
import { useState } from "react";
import styles from "./Select.module.scss";
import arrowForSelect from "assets/img/arrowForSelect.png";
import TitleForUiComponents from "ui/TitleForUiComponents/TitleForUiComponents";
import { useClickOutside } from "hooks/useClickOutside";

type PropsType = {
  options: Array<SelectOptionType>;
  onChange: (category: SelectOptionType) => void;
  title: string;
  selectedOption?: SelectOptionType;
};

const Select = ({ options, onChange, title, selectedOption }: PropsType) => {
  const [showOptions, setShowOptions] = useState(false);
  const hasOptions = options.length > 0;
  const ref = useClickOutside(() => setShowOptions(false));

  return (
    <div className={styles.selectContainer} ref={ref}>
      <TitleForUiComponents title={title} />
      <div
        className={classNames([styles.select])}
        onClick={() => setShowOptions((v) => hasOptions && !v)}
      >
        <div
          className={classNames(styles.arrow, {
            [styles.arrowOpen]: showOptions,
          })}
        >
          <img src={arrowForSelect} alt="" />
        </div>
        <p className={styles.selectValue}>{selectedOption?.label}</p>
        {hasOptions && (
          <div
            className={classNames(styles.options, {
              [styles.optionsOpen]: showOptions,
            })}
          >
            {options.map((o) => (
              <button
                key={o.value}
                type={"button"}
                className={styles.option}
                onClick={() => onChange(o)}
              >
                {o.label}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Select;
