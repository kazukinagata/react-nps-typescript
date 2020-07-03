import React from 'react'
import styles from './styles.module.css'

const MIN = 0
const MAX = 10

type Props = {
  onSubmit?: (value: number) => void
}
export default function NPSScale({onSubmit}: Props) {
  const [value, setValue] = React.useState<number | null>(null)
  const handleMouseEnter = (value: number) => {
    setValue(value)
  }
  const handleMouseLeave = () => {
    setValue(null)
  }
  const handleClick = (value: number) => {
    onSubmit && onSubmit(value)
  }
  return (
    <div className={styles.root}>
      <div>
        {range(MIN, MAX).map((i) => (
          <div
            key={i}
            className={`${styles.value} ${value !== null && value >= i ? styles.selected : ''}`}
            onMouseEnter={() => handleMouseEnter(i)}
            onMouseLeave={handleMouseLeave}
            onClick={() => handleClick(i)}
          >
            <div>{i}</div>
          </div>
        ))}
      </div>
      <div className={styles.legend}>
        <div className={`${styles.label} ${styles.left}`}>全くない</div>
        <div className={`${styles.label} ${styles.right}`}>非常にある</div>
      </div>
    </div>
  )
}

function range(start: number, end: number) {
  return Array.from({length: end - start + 1}).map((_, idx) => start + idx)
}
