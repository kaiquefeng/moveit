import { CompletedChallenges } from "../components/CompletedChallenges";
import { CountDown } from "../components/CountDown";
import { ExperienceBar } from "../components/ExperienceBar";
import { Profile } from "../components/Profile";

import styles from '../styles/pages/Home.module.scss'

import Head from 'next/head'

export default function Home() {
  return (
    <div className={styles.container}>
      <ExperienceBar />
      <Head>
        <title>Início | Move.it</title>
      </Head>

      <section>
        <div>
          <Profile />
          <CompletedChallenges />
          <CountDown />
        </div>
        <div>

        </div>
      </section>
   </div>
  )
}
