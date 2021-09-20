import { Button } from '@material-ui/core'
import React from 'react'

const Square = ({ value, click }) => {
	return (
		<Button
			style={{
				width: '100px',
				height: '100px',
				border: '1px solid black',
				borderRadius: '0px',
				fontSize: '30px',
			}}
			onClick={click}
		>
			{value}
		</Button>
	)
}

export default Square
