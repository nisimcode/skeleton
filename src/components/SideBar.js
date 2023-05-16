'use client'
import Dropdown from 'react-bootstrap/Dropdown'
import DropdownButton from 'react-bootstrap/DropdownButton'

export default function SideBar() {
  return (
    <>
      <DropdownButton
        id="dropdown-basic-button"
        title="Dropdown1"
        size="sm"
        className="dropdown"
        variant="secondary"
      >
        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
      </DropdownButton>

      <DropdownButton
        id="dropdown-basic-button"
        title="Dropdown2"
        size="sm"
        className="dropdown"
        variant="secondary"
      >
        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
      </DropdownButton>

      <DropdownButton
        id="dropdown-basic-button"
        title="Dropdown3"
        size="sm"
        className="dropdown"
        variant="secondary"
      >
        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
      </DropdownButton>
    </>
  )
}
