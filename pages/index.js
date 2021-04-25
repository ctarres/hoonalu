import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Hoonalu</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Ho'onalu
        </h1>

        <p className={styles.description}>
          Welcome to Ho'onalu
        </p>
      </main>

      <footer className={styles.footer}>
        <p>This is a footer</p>
      </footer>
    </div>
  )
}
