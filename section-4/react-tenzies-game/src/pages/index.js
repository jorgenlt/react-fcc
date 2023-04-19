import Head from 'next/head'
import Die from './Die'
import { useState, useEffect, use } from 'react'
import {nanoid} from 'nanoid'

export default function Home() {

  const allNewDice = () => {
    return Array.from({ length: 10 }).map(() => {
    	return {
      	value: Math.ceil(Math.random() * 6),
        isHeld: false,
        id: nanoid()
      };
    });
  }

  const [dice, setDice] = useState([])

  useEffect(() => setDice(() => allNewDice()), [])

  const diceElements = dice.map(die => (
    <Die 
      key={die.id} 
      value={die.value}
      isHeld={die.isHeld}
      holdDice={() => holdDice(die.id)}
    />
  ))

  const rollDice = () => {
    setDice(allNewDice())
    console.log(dice);
  }

  const holdDice = id => {
    setDice(prevDice => prevDice.map(prevDice => {
      return prevDice.id === id
      ? { ...prevDice, isHeld: !prevDice.isHeld }
      : prevDice
    }))
  }

  return (
    <>
      <Head>
        <title>Tenzies Game</title>
        <meta name="description" content="Tenzies Game" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className='container'>
        <div className='dies'>
          {diceElements}
        </div>
        <button className='roll-dice-btn' onClick={rollDice}>Roll</button>
      </main>
    </>
  )
}
