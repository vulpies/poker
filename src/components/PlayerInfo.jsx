import React, { useState } from 'react';
import { Avatar, Star } from '../svg';

const PlayerInfo = () => {
	const [showBalanse, setShow] = useState(true)

	return (
		<section className='player__wrapper'>
			<div className='player__nickname'>
				<h2>LongUserName</h2>
				<div className='player__stars'>
					<span><Star /></span>
					<span><Star /></span>
					<span><Star /></span>
					<span><Star /></span>
					<span><Star /></span>
				</div>
			</div>
			<div className='player__img'>
				{/* <Avatar /> */}
				<img src={require('../image/ava.png')} alt="avatar" />
			</div>
			<div className='player__balance'>
				<span className={showBalanse ? 'showBalance' : 'hideBalance'} onClick={() => setShow(!showBalanse)}>
				</span>

				{showBalanse ?
					<p>$100,500.00</p> :
					<p className='show'>Show balance</p>
				}

			</div>
		</section>
	);
};

export default PlayerInfo