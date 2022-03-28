import style from './Select.module.css'

type Props = React.SelectHTMLAttributes<HTMLSelectElement> & {
  options: string[]
  label: string
  active?: string
  emptySelectText?: string
}

export const Select: React.FC<Props> = ({
  options,
  label,
  emptySelectText,
  ...props
}) => (
  <>
    <label className={style.label}>{label}</label>
    <select {...props} className={style.select}>
      <option value="" disabled hidden>
        {emptySelectText || 'Please Choose...'}
      </option>

      {options.map((option) => (
        <option key={option} value={option} className={style.option}>
          {option}
        </option>
      ))}
    </select>
  </>
)
