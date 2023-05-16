'use client'

import { useState } from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
export default function SearchBar({ mainSubmitHandler }) {
  const [sideBarSearchValue, setSideBarSearchValue] = useState('')
  const changeHandler = (e) => {
    setSideBarSearchValue(e.target.value)
  }

  const searchBarSubmitHandler = () => {
    mainSubmitHandler(sideBarSearchValue)
  }

  const checkIfEnterKey = (e) => {
    if (e.key === 'Enter') {
      searchBarSubmitHandler()
    }
  }

  return (
    <>
      <Form.Control
        type="text"
        placeholder="Search here"
        value={sideBarSearchValue}
        onChange={changeHandler}
        onKeyDown={checkIfEnterKey}
      />
      <Button
        variant="outline-success"
        onClick={searchBarSubmitHandler}
        size="sm"
      >
        Search
      </Button>
      <Button
        variant="outline-danger"
        onClick={() => setSideBarSearchValue('')}
        size="sm"
      >
        Clear
      </Button>
    </>
  )
}
