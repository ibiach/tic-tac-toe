import React, { useState } from 'react'
import Board from './Board'
import CalculateWinner from '../App/CalculateWinner'

const Game = () => {
	const [playZone, setPlayZone] = useState(Array(9).fill(null, 0, 9))
	const [xIsNext, setXIsNext] = useState(true)

	const handleClick = i => {
		const boardCopy = [...playZone]
		if (CalculateWinner(playZone) || playZone[i]) return
		boardCopy[i] = xIsNext ? 'X' : '0'
		setPlayZone(boardCopy)
		setXIsNext(!xIsNext)
	}

	return (
		<div className='wrapper'>
			<Board zone={playZone} click={handleClick}></Board>
		</div>
	)
}

export default Game
