import styles from '../styles/components/ChallengeBox.module.scss'

export function ChallengeBox() {
  return (
    <div className={styles.challengeBoxContainer}>
      <div className={styles.challengeBoxNotActive}>
        <strong>Finalize um ciclopara receber desafios</strong>
        <p>
          <img src="icons/level-up.svg" alt="Level Up"/>
          Avance de level completando os desafios.
        </p>
      </div>
    </div>
  )
}