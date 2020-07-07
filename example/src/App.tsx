import React from 'react'

import NPS from '@kazukinagata/react-nps-typescript'
import '@kazukinagata/react-nps-typescript/dist/index.css'

const App = () => {
  const [score, setScore] = React.useState<number | null>(null)
  const [dismissed, setDismissed] = React.useState(false)

  return (
    <NPS
      score={score}
      dismissed={dismissed}
      onSubmit={(score) => {console.log(`clicked ${score}`); setScore(score)}}
      onDismissed={() => setDismissed(true)}
    />
  )
}

export default App
