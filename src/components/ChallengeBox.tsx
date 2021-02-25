import { useContext } from 'react'
import { ChallengeContext } from '../context/ChallengeContext'
import { CountDownContext } from '../context/CountDownContext'
import styles from '../styles/components/ChallengeBox.module.scss'

export function ChallengeBox() {
  const { activeChallenge, resetChallenge, completedChallenge } = useContext(ChallengeContext)
  const { resetCountDown } = useContext(CountDownContext)

  function handleChallengeSucceeded() {
    completedChallenge()
    resetCountDown()
  }

  function handleChallengeFailed() {
    resetChallenge()
    resetCountDown()
  }


  return (
    <div className={styles.challengeBoxContainer}>
      { activeChallenge ? (
        <div className={styles.challengeActive}>
          <header>Ganhe {activeChallenge.amount} xp</header>

          <main>
            <img src={`icons/${activeChallenge.type}.svg`} alt=""/>
            <strong>Novo desafio</strong>
            <p>{activeChallenge.description}</p>
          </main>

          <footer>
            <button 
              type="button"
              className={styles.challengeFailedButton}
              onClick={handleChallengeFailed}
            >
              Falhei</button>
            <button 
              type="button"
              className={styles.challengeSucceededButton}
              onClick={handleChallengeSucceeded}
            >
              Completei</button>
          </footer>
        </div>
      ) : (
        <div className={styles.challengeBoxNotActive}>
        <strong>Finalize um ciclopara receber desafios</strong>
        <p>
          <img src="icons/level-up.svg" alt="Level Up"/>
          Avance de level completando os desafios.
        </p>
      </div>
      )}
    </div>
  )
}