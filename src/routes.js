import {Route} from "react-router-dom";
import AddGame from "./pages/AddGame";
import Games from "./pages/Games";

const routes=(
    <Route>
        <Route exact path='/add' component={AddGame}/>
        <Route exact path='/games' component={Games}/>
    </Route>
)
export default routes;
