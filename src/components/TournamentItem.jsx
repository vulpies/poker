import React from 'react'
import { Hours, Pin } from '../svg'

const TournamentItem = () => {
	return (
		<div className='tournament__wrapper'>
			<div className='tournament__reg'>
				<p>Registering</p>
			</div>
			<div className='tournament__item'>
				<div className='tournament__left'>
					<div className='tournament__tags'>
						<span><Pin /></span>
						<p>NL 2-7 Triple Draw</p>
					</div>
					<p className='tournament__ofc'>OFC Pineapple</p>
					<div className='tournament__date'>
						<span><Hours /></span> <p>12:00 pm, 28 July</p>
					</div>
				</div>

				<div className='tournament__right'>
					<button className='tournament__btn'>Join table</button>
					<div>11</div>
				</div>
			</div>
		</div>
	)
}

export default TournamentItem