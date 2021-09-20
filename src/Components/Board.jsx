import React from 'react'
import styled from 'styled-components'
import Square from './Square'

const Board = ({ zone, click }) => {
	const Board = styled.div`
		margin: 0px auto;
		max-width: 300px;
		display: block;
	`

	return (
		<Board>
			{zone.map((square, i) => {
				return <Square key={i} value={square} click={() => click(i)} />
			})}
		</Board>
	)
}

export default Board
