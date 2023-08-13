import React from 'react'
import { Pin, Clock, Players, Tourney, Rapid, Bounty, Time, ProBounty, Knockout, FreeRoll } from '../svg'
import { dataTournaments } from '../mocks/mocksData'

const TournamentItem = () => {

	function doActive() {
		const list = document.querySelectorAll('.tournament__wrapper')

		list.forEach(i => {
			i.addEventListener('click', (e) => {
				if (e.currentTarget === i) {
					if (i.hasAttribute("aria-selected")) {
						i.removeAttribute("aria-selected")
					} else {
						i.setAttribute("aria-selected", "true")
					}
				}
				else return
			})
		})
	}


	return (
		<>
			{dataTournaments.map(item => {
				return <article
					key={item.id}
					selected
					className='tournament__wrapper'
					onClick={(e) => doActive(e)}
				>
					<div className={item.status === 'registering' ? 'tournament__status tournament__reg' : 'tournament__status tournament__canc'}>
						<h3>{item.status}</h3>
					</div>
					<div className='tournament__wrap'>
						<div className="tournament__wrap-item">
							<div className="tournament__info">
								<div className="tournament__summary">
									<div className='tournament__summary-tags'>
										{item.pin ? <span><Pin /></span> : ''}
										<p>{item.sammary}</p>
									</div>

									<div className='tournament__summary-types'>
										{item.clock ? <><Time /></> : ''}
										{item.rapid ? <><Rapid /></> : ''}
										{item.bounty ? <><Bounty /></> : ''}
										{item.proBounty ? <><ProBounty /></> : ''}
										{item.knockout ? <><Knockout /></> : ''}
										{item.freeRoll ? <><FreeRoll /></> : ''}
									</div>
								</div>

								<h4 className={item.rapid ? 'tournament__title title-yellow' : item.new ? 'tournament__title title-green' : 'tournament__title'}
								>{item.title}</h4>
							</div>

							<div className="tournament__join">
								{item.status === 'registering' ?
									<button className='tournament__join-btn'>
										Join table
									</button>
									:
									<button disabled className='tournament__join-btn'>
										Cancelled
									</button>}
							</div>
						</div>

						<div className='tournament__wrap-data'>
							<div className="tournament__data">
								<span><Clock /></span>
								<p>
									{`${item.time}, ${item.data}`}
								</p>
							</div>
							<div className="tournament__score">
								<div className='tournament__score-players'>
									<span><Players /></span>
									<p>{`${item.currentPlayers}/${item.maxPlayers}`}
									</p>
								</div>

								<div className='tournament__score-tourney'>
									<span><Tourney /></span>
									<p>{item.tournaments}</p>
								</div>
							</div>
						</div>
					</div>
				</article >
			})}
		</>
	)
}

export default TournamentItem