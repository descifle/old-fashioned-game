import React, { useEffect, useState } from 'react'
import './main.scss'
import Character from './character/character'

const random = new Character('halo')

const App  = () => {

    const [health, setHealth] = useState(random.health)

    // useEffect(() => {
       
    // }, [health, random.health])

    const attackClick = () => {
        random.getAttacked(10)
        setHealth(random.health)
        console.log(random.health)
    }

    return (
        <div className="character">
            <div>{random.name}</div>
            <div>current health: {health}</div>
            {/* <div>{Character}</div> */}
            <button onClick={attackClick}>Attacked</button>
        </div>
    )
}

export default App