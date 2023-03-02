import React from 'react'
import { Avatar, CloseEye, Star } from '../svg'

const PlayerInfo = () => {
	return (
		<div className='player__wrapper'>
			<div className='player__nickname'>
				<p>LongUserName</p>
				<div className='player__stars'>
					<span><Star /></span>
					<span><Star /></span>
					<span><Star /></span>
					<span><Star /></span>
					<span><Star /></span>
				</div>
			</div>
			<div className='player__img'>
				<Avatar />
				{/* <img src='../img/ava.png' alt='' /> */}
			</div>
			<div className='player__money'>
				<div className='player__money-eye'><CloseEye /></div>
				<p>$100,500.00</p>
			</div>
		</div>
	)
}

export default PlayerInfo