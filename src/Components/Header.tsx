// import React from 'react'
import { Button, Input } from 'antd'
import { SearchOutlined } from '@ant-design/icons'
import { useState } from 'react'
import '../index.css'

const Header = () => {
    const { movieSearch, setMovieSearch } = useState('')
    return (
        <header>
            <img className="header-icon" src="../5595932_55548.jpg" alt="" />
            <h1>Мой любимый фильм!🤩</h1>
            <form>
                <Input
                    placeholder="Поиск"
                    onChange={(evt) => setMovieSearch(evt.target.value)}
                    value={movieSearch}
                />
                <Button type="dashed" icon={<SearchOutlined />}>
                    Search
                </Button>
            </form>
        </header>
    )
}

export default Header
