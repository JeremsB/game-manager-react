import GameCard from "../component/GameCard";
import {useEffect} from "react";
import {getGames} from "../store/actions/gamesAction";
import {useDispatch, useSelector} from "react-redux";

function Games(props) {

    const games = useSelector(state => state.games);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getGames());
    }, [dispatch]);

    return (
        <div>
            <div className="grid grid-cols-4 gap-4">
                {games.games.map((game) => (
                    <GameCard
                        id={game.id}
                        title={game.name}
                        console={game.gameConsole.label}
                        picture={game.picture}
                        category={game.gameCategory.label}
                        description={game.description}
                    />
                ))}
            </div>
        </div>
    );

}

export default Games
