'use client'

import { useState } from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
export default function SearchBar() {
  const [searchValue, setSearchValue] = useState('')
  return (
    <>
      <Form>
        <Form.Control type="text" placeholder="Search here" value={searchValue} />
      </Form>
    </>
  )
}
