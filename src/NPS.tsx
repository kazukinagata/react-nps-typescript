import React from 'react'
import NPSScale from './components/NPSScale'
import styles from './styles.module.css'
type Props = {
  animated?: boolean
  service?: string
  onSubmit?: (score: number) => void
  onDismissed?: (score: number | null) => void
}
export function NPS({
  animated = true,
  service,
  onSubmit,
  onDismissed
}: Props) {
  const [dismissed, setDismissed] = React.useState(false)
  const [score, setScore] = React.useState<number | null>(null)
  const message = service
    ? `あなたはこの${service}を友人知人にどのくらい勧める可能性がありますか？`
    : 'あなたはこの商品・サービスを友人知人にどのくらい勧める可能性がありますか？'

  const handleDismiss = () => {
    setDismissed(true)
  }
  const handleSubmit = (score: number) => {
    setScore(score)
  }
  React.useEffect(() => {
    onSubmit && score !== null && onSubmit(score)
  }, [score, onSubmit])

  React.useEffect(() => {
    onDismissed && onDismissed(score)
  }, [dismissed, setDismissed, onDismissed])

  return dismissed ? null : (
    <div className={`${styles.root} ${animated ? styles.animated : ''}`}>
      <button className={styles.close} onClick={handleDismiss}>
        ✕
      </button>

      {score ? (
        <div className={styles.inner}>フィードバックありがとうございました！</div>
      ) : (
        <div className={styles.inner}>
          <p className={styles.message}>{message}</p>
          <NPSScale onSubmit={handleSubmit} />
        </div>
      )}
    </div>
  )
}
