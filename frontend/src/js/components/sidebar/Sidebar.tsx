import * as React from 'react'
import { Dropdown, DropdownMenu, DropdownToggle, DropdownItem } from 'reactstrap'
import { Link } from 'react-router-dom'

export const Sidebar: React.FC = () => {

    const [dropdownOpen, setDropdownOpen] = React.useState(false)
    const toggle = () => setDropdownOpen((prevState)=>{return !prevState})

    return <div>
        <Link to={'/test'}>
            test
        </Link>
    </div>
}