import { Typography } from '@material-ui/core'
import React from 'react'
import Game from '../Components/Game'

export default () => {
	const style = { textAlign: 'center' }
	return (
		<div>
			<Typography style={style} variant='h1'>
				TIC-TAC-TOE
			</Typography>
			<Typography style={style} variant='h3'>
				GAME
			</Typography>
			<Game />
		</div>
	)
}
