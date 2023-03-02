import { Spinner, ProgressBar, PlayerInfo, TournamentItem } from "./components/index";

function App() {
  return (
    <>
      <div className='main__wrapper'>
        <h3 className='main__title'>
          Poker
        </h3>
        <Spinner />
        <PlayerInfo />
        <ProgressBar />
        <TournamentItem />
      </div>
    </>
  );
}

export default App;
