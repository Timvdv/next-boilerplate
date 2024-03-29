import styles from 'static/scss/pages/Home.module.scss'

import AppHead from 'components/head/Head'
import Carousel from 'components/carousel/Carousel'

export default function Home() {
  const pageName = 'Home'

  return (
    <div className={styles.container}>
      <AppHead name={pageName} />

      <main className={styles.main}>
        <h1 className={styles.title}>
          The <a href="https://nextjs.org">Next Boilerplate!</a>
        </h1>

        <p className={styles.description}>
          Get started by editing
          <code className={styles.code}>src/pages/index.js</code>
        </p>

        <Carousel />
      </main>

      <footer className={styles.footer}></footer>
    </div>
  )
}

