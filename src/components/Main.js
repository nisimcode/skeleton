'use client'
import { useState } from 'react'
import Content from './Content'
import SearchBar from './SearchBar'
import styles from './Main.module.css'

export default function Main() {
  const [mainSearchValue, setMainSearchValue] = useState('')
  const handleOnSubmit = (value) => {
    setMainSearchValue(value)
  }

  return (
    <>
      <div className={styles.search_area}>
        <SearchBar mainSubmitHandler={handleOnSubmit} />
      </div>
      <div className={styles.content_area}>
        <Content searchValue={mainSearchValue} />
      </div>
    </>
  )
}
