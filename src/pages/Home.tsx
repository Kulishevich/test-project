import { FC } from 'react'
import styles from './Home.module.scss'

const Home: FC = () => {
  return (
    <div className={styles.main}>
        <div className={styles.content}>
            <div className={styles.container}>
                <h1>Демо-версия</h1>
                <p>За 18 лет деятельности было реализовано более 500 крупных, а так же, не менее 2500 средних и малых проектов. Используя знания и накопленный опыт мы можем предложить </p>
                <button>Попробовать бесплатно <img src="./Vector.png" alt="" />
                </button>
            </div>
        </div>
        <div className={styles.imageContainer}>
          <img src="./image15.png" alt="image" className={styles.image}/>
        </div>
    </div>
  )
}

export default Home
