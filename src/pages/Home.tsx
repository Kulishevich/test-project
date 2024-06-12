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
          <img src="https://s3-alpha-sig.figma.com/img/d8b5/60a4/6936b693bec69faddc38d6d12719ccbe?Expires=1719187200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=BIWo6Mw7CLRZ7LDTryYmcsKz89Cz5C7v~jzBvX1g7HKymJcrB9cAOl2vwNeF1hRRVQ3tHq75j1f~hbR-sW~Uf0eau8vDgbOeEpGvrXNub8wR0ufxFvR5h~Ekr2IbRdu-n3WspO5PQ9e7tcE2ToDLE5wEdAVvw1QxaPQrbDoqFyNpjPgWtbywXnLpgVvYRy0mqm49ejdND9NrA3~MZQOa3NYOT3vakWs3TpTFsXAMLkdcNms3qB2qq7vdx3sHA1UfRziX44iL~L4nuw2ct1qcPNdbvCY3zAdU7u3pFMkF59CtkE90UdOTrrOuGuijigpxo0GztjGDfAWCKyOkiqtLHQ__" alt="image" className={styles.image}/>
        </div>
    </div>
  )
}

export default Home
