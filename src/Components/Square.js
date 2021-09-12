import React from 'react'

const Square = ({ value, click }) => {
	return (
		<button
			style={{
				width: '100px',
				height: '100px',
			}}
			onClick={click}
		>
			{value}
		</button>
	)
}

export default Square
