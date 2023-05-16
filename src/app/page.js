import Logo from '../components/Logo'
import Main from '../components/Main'
import SideBar from '../components/SideBar'
import styles from './page.module.css'
export default function Home() {
  return (
    <div className={styles.home_container}>
      <div className={styles.logo_area}>
        <Logo />
      </div>
      <div className={styles.user_area}>Hi, John Doe</div>
      <div className={styles.sidebar_area}>
        <SideBar />
      </div>
      <div className={styles.main_container}>
        <Main />
      </div>
    </div>
  )
}
