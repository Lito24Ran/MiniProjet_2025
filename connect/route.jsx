import { BrowserRouter as Router , Routes , Route} from "react-router-dom";
import Login from './login' ;

function route() {
    return (
        <Router>
            <Route>
                <Route path="/login" element={<Login/>} />
            </Route>
        </Router>
    )
}

export default route ;