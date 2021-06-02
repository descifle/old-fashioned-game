import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
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

    const createMonster = (e) => {
        console.log(e)
        const monster = new Character('monster')
        const myDiv = document.createElement('div')
        myDiv.innerHTML = (
            <span> hello</span>
        )
        document.querySelector('.monster').appendChild(myDiv)
    }

    return (
       <div>
            <div className="character">
                <div>{random.name}</div>
                <div>current health: {health}</div>
                {/* <div>{Character}</div> */}
                <button onClick={attackClick}>Attacked</button>
            </div>
            <div className="character monster">
            <button onClick={createMonster}>create monster</button>
            </div>
       </div>
    )
}

App.propTypes = {
    message: PropTypes.string.isRequired
}

export default App