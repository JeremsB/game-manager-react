import './App.css';
import GameCard from "./component/GameCard";
import {useEffect} from "react";
import {getGames} from "./store/actions/gamesAction";
import {useDispatch, useSelector} from "react-redux";


function App(props) {

    const games = useSelector(state => state.games);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getGames());
    }, []);

  return (
    <div className="App">
      <header className="App-header">
        <GameCard
            title={"Hades"}
            console={"Switch"}
            picture={"https://image.api.playstation.com/vulcan/ap/rnd/202104/0517/9AcM3vy5t77zPiJyKHwRfnNT.png"}
            category={"Roguelike"}
            description={"Hades est un rogue-like et dungeon crawler qui associe le meilleur des titres de Supergiant " +
            "salués par la critique."}
        />
      </header>
    </div>
  );
}

export default App
