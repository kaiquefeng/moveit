import Head from 'next/head'

import { CompletedChallenges } from "../components/CompletedChallenges";
import { CountDown } from "../components/CountDown";
import { ExperienceBar } from "../components/ExperienceBar";
import { Profile } from "../components/Profile";
import { ChallengeBox } from "../components/ChallengeBox";

import styles from '../styles/pages/Home.module.scss'
import { CountDownProvider } from '../context/CountDownContext';

export default function Home() {
  return (
    <div className={styles.container}>
      <ExperienceBar />
      <Head>
        <title>Início | Move.it</title>
      </Head>

      <CountDownProvider>
        <section>
          <div>
            <Profile />
            <CompletedChallenges />
            <CountDown />
          </div>
          <div>
            <ChallengeBox />
          </div>
        </section>
      </CountDownProvider>
   </div>
  )
}
