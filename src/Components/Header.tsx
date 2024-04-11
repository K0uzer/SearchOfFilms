import { Input } from 'antd'
import React from 'react'
import '../index.css'

const Header = () => {
    return (
        <header>
            <img className="header-icon" src="../5595932_55548.jpg" alt="" />
            <h1>Найди свой любимый фильм!</h1>
            <Input placeholder="Поиск" />
        </header>
    )
}

export default Header
