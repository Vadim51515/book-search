import classNames from 'classnames'
import { useState } from 'react'
import styles from './Select.module.scss'
import arrowForSelect from 'assets/img/arrowForSelect.png'
const Select = () => {
  const [showOptions, setShowOptions] = useState(false)
  const hasOptions = true

  return (
    <div className={classNames([styles.select])} onClick={() => setShowOptions((v) => hasOptions && !v)}>
      <div className={classNames(styles.arrow, { [styles.arrowOpen]: showOptions })}>
        {/* <SVG.Arrow style={{ fill: 'var(--color_placeholder)', strokeWidth: 1 }} /> */}
        <img src={arrowForSelect} alt="" />
      </div>
      {/* {props.error && <span className={styles.error}>{props.error}</span>} */}
      {hasOptions && (
        <div className={classNames(styles.options, { [styles.optionsOpen]: showOptions })}>
          {/* {options.map((e) => (
            <button key={e.value} type={'button'} className={styles.option} onClick={() => onChange(e)}>
              {e.label}
            </button>
          ))} */}
        </div>
      )}
    </div>
  )
}

export default Select