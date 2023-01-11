// import classNames from 'classnames'
// import styles from './Select.module.scss'
const Select = () => {
//   const [showOptions, setShowOptions] = useState(false)
//   const hasOptions = options.length > 0

//   return (
//     <div className={classNames([styles.select])}>
//     <button
//       type={'button'}
//       className={classNames([
//         // props.btnClass,
//         styles.currentValue,
//         {
//           [styles.placeholder]: value === undefined,
//           [styles.valueError]: props.error !== undefined,
//           [styles.showOptions]: showOptions,
//         },
//       ])}
//       onClick={() => setShowOptions((v) => hasOptions && !v)}>
//       {value?.label ?? 'Select...'}
//     </button>
//     <div className={classNames(styles.arrow, { [styles.arrowOpen]: showOptions })}>
//       <SVG.Arrow style={{ fill: 'var(--color_placeholder)', strokeWidth: 1 }} />
//     </div>
//     {props.error && <span className={styles.error}>{props.error}</span>}
//     {hasOptions && (
//       <div className={classNames(styles.options, { [styles.optionsOpen]: showOptions })}>
//         {options.map((e) => (
//           <button key={e.value} type={'button'} className={styles.option} onClick={() => onChange(e)}>
//             {e.label}
//           </button>
//         ))}
//       </div>
//   )
}

export default Select