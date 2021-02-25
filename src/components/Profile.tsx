import { useContext } from 'react'
import { ChallengeContext } from '../context/ChallengeContext'
import styles from '../styles/components/Profile.module.scss'
export function Profile() {
  const {level} = useContext(ChallengeContext)

  return (
    <div className={styles.profileContainer}>
      <img src="https://github.com/kaiquemaia.png" alt="Kaique Maia"/>
      <div>
        <strong>Kaique Maia</strong>
        <p>
          <img src="icons/level.svg" alt=""/>
          Level {level}
        </p>
      </div>

      <div className={styles.switch}>
        <span>
          <input type="checkbox"/>
          <label htmlFor="check"></label>
        </span>
      </div>
    </div>
  )
}