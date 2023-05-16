import styles from './page.module.css'
import SideBar from '../components/SideBar'
import SearchBar from '../components/SearchBar'
import Logo from '../components/Logo'
import Content from '../components/Content'

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
        <div className={styles.search_area}>
          <SearchBar />
        </div>
        <div className={styles.content_area}>
          <Content />
        </div>
      </div>
    </div>
  )
}