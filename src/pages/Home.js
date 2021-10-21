import '../App.css';
import {Link} from "react-router-dom";

function Home() {

    return (
        <div className="Home text-center m-auto">
            <Link to="/games">
                <img
                    className="h-72 inline-block"
                    src='/logo_1.png'
                    alt={'logo'}/>
                <h1 className="text-9xl inline-block align-middle ml-6">Game Manager</h1>
            </Link>
        </div>
    );

}

export default Home
