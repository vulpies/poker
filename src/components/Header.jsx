import React from 'react'
import { PlayerInfo, Spinner } from './index'

const Header = () => {
	return (
		<header className='header__wrapper'>
			<h1 className='header__title'>
				Poker
			</h1>
			<Spinner />
			<PlayerInfo />
		</header>
	)
}

export default Header