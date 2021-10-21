import GameCard from "../component/GameCard";
import {useEffect} from "react";
import {getGames} from "../store/actions/gamesAction";
import {useDispatch, useSelector} from "react-redux";

import { Fab } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

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
                        title={game.name}
                        console={game.gameConsole.label}
                        picture={game.picture}
                        category={game.gameCategory.label}
                        description={game.description}
                    />
                ))}
            </div>
            <Fab color="primary" aria-label="add">
                <AddIcon />
            </Fab>
        </div>
    );

}

export default Games
