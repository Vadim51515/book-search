import classNames from "classnames";
import { useState } from "react";
import styles from "./Select.module.scss";
import arrowForSelect from "assets/img/arrowForSelect.png";
import { useSelector } from "../../redux/store";
import TitleForUiComponents from "ui/TitleForUiComponents/TitleForUiComponents";

type PropsType = {
  options: Array<SelectOptionType>;
  onChange: (category: SelectOptionType) => void;
  title: string;
  selectedOption?: SelectOptionType;
};

const Select = ({ options, onChange, title, selectedOption }: PropsType) => {
  const [showOptions, setShowOptions] = useState(false);
  const hasOptions = options.length > 0;

  return (
    <div className={styles.selectContainer}>
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
