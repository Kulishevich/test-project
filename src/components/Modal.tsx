import { FC } from 'react'
import styles from './Modal.module.scss'
import { SubmitHandler, useForm } from 'react-hook-form'

interface HomeProps {
  setModalToggle: (value: boolean) => void
}

type AuthType = {
  login: string,
  password: string
}

const Modal: FC<HomeProps> = ({setModalToggle}) => {
  const { register, handleSubmit, reset, formState: {errors} } = useForm<AuthType>()
  
  const onSubmit: SubmitHandler<AuthType> = (data, event) => {
    alert(`Ваш логин ${data.login}, ваш пароль: ${data.password}`)
    reset()
    event?.preventDefault()
  }

  const validateEmailOrPhone = (value: string): true | string => {
    const emailReg = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+$/i;
    const phoneReg = /^\+375\d{9}$/;
    return emailReg.test(value) || phoneReg.test(value) || "Некоректный ввод"
  }

  return (
    <div className={styles.wrap}>
        <div className={styles.main}>
          <div className={styles.buttonContainer}>
            <button onClick={() => setModalToggle(false)}><img src="./x.png" alt="" /></button>
          </div>
          <div className={styles.container}>
            <form onSubmit={handleSubmit(onSubmit)}>
              <label className={styles.title}>Войти в систему</label>
              <input 
                type="text" 
                placeholder='Email/Телефон' 
                className={styles.auth_login}
                {...register('login', {
                  required: true,
                  validate: validateEmailOrPhone
                })}
              />
              {errors.login && <p className={styles.error}>Поле должно состоять из Номера(+375...) или Email!</p>}
              <input 
                type="text" 
                placeholder='Пароль' 
                className={styles.auth_password}
                {...register('password', {
                  required: true,
                })}
              />
              {errors.password && <p className={styles.error}>Поле не может быть пустым!</p>}
              <div className={styles.checkboxContainer}>
                <input type="checkbox" className={styles.checkbox}/>
                <label className={styles.checkboxLabel}>Запомнить пароль</label>
              </div>
              <a href="#" className={styles.link}>Восстановить</a>  
              <button type='submit' className={styles.btn1}>Войти</button>
              <button type='button' className={styles.btn2}>Зарегистрироваться</button>
            </form>
          </div>
        </div>
    </div>
  )
}

export default Modal
