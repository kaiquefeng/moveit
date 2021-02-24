import styles from '../styles/components/Profile.module.scss'
export function Profile() {
  return (
    <div className={styles.profileContainer}>
      <img src="https://github.com/kaiquemaia.png" alt="Kaique Maia"/>
      <div>
        <strong>Kaique Maia</strong>
        <p>
          <img src="icons/level.svg" alt=""/>
          Level 1
        </p>
      </div>
    </div>
  )
}