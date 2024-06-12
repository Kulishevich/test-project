import styles from './Modal.module.scss'

export default function Modal() {
  return (
    <div className={styles.wrap}>
        <div className={styles.main}>
          <div className={styles.buttonContainer}>
            <button><img src="./x.png" alt="" /></button>
          </div>
          <div className={styles.container}>
            <form>
              <label className={styles.title}>Войти в систему</label>
              <input type="text" placeholder='Email/Телефон' className={styles.auth}/>
              <input type="text" placeholder='Пароль' className={styles.auth}/>
              <input type="checkbox" className={styles.checkbox}/>
              <label className={styles.checkboxLabel}>Запомнить пароль</label><br/>
              <a href="/" className={styles.link}>Восстановить</a>
              <button className={styles.btn1}>Войти</button>
              <button className={styles.btn2}>Зарегистрироваться</button>
            </form>
          </div>
        </div>
    </div>
  )
}
