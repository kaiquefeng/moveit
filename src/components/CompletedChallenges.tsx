import { useContext } from 'react'
import { ChallengeContext } from '../context/ChallengeContext'
import styles from '../styles/components/CompletedChallenges.module.scss'

export function CompletedChallenges() {
  const { challengesCompleted } = useContext(ChallengeContext)

  return (
    <div className={styles.completedChallengesContainer}>
      <span>Desafios completos</span>
      <span>{challengesCompleted}</span>
    </div>
  )
}