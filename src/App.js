import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles(theme => ({
	root: {
		flexGrow: 1,
		marginLeft: 'auto',
		marginRight: 'auto',
		paddingTop: '100px',
		width: '500px',
		minHeight: '500px',
	},
	paper: {
		border: '1px solid',
		maxHeight: '150px',
		borderRadius: 0,
		padding: theme.spacing(10),
		textAlign: 'center',
		color: theme.palette.text.secondary,
	},
}))

export default function NestedGrid() {
	const classes = useStyles()

	function FormRow() {
		return (
			<React.Fragment>
				<Grid item xs={4}>
					<Paper className={classes.paper}></Paper>
				</Grid>
				<Grid item xs={4}>
					<Paper className={classes.paper}></Paper>
				</Grid>
				<Grid item xs={4}>
					<Paper className={classes.paper}></Paper>
				</Grid>
			</React.Fragment>
		)
	}

	return (
		<div className={classes.root}>
			<Typography variant='h1'>Tic-Tac-Toe</Typography>
			<Grid container spacing={0}>
				<Grid container item xs={12} spacing={0}>
					<FormRow />
				</Grid>
				<Grid container item xs={12} spacing={0}>
					<FormRow />
				</Grid>
				<Grid container item xs={12} spacing={0}>
					<FormRow />
				</Grid>
			</Grid>
		</div>
	)
}
