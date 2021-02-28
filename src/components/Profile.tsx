import { useContext, useState } from 'react'
import { ChallengeContext } from '../context/ChallengeContext'
import styles from '../styles/components/Profile.module.scss'

import Switch from 'react-switch'

interface Profile {
  style: () => void;
}

export function Profile() {
  const {level} = useContext(ChallengeContext)

  const [switchButton, setSwitchButton] = useState(true)

  function hasSwitchButton() {
    setSwitchButton(true)
    const span = document.querySelector('#switch span')
  }

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
        <Switch 
          onChange={() => {}}
          checked={true}
          checkedIcon={false}
          uncheckedIcon={false}
          height={20}
          width={40}
          handleDiameter={30}
          offColor="#666666"
          onColor="#9C29FF"
        />
        </span>
        {/* <span id={switchButton ? 'checked' : ''}>
        <label htmlFor="check" onClick={hasSwitchButton}/>
        </span> */}
      </div>
    </div>
  )
}