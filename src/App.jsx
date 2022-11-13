import React from "react";
import Homepage from "./Components/Route/Homepage";
import { Route, Switch } from "react-router-dom";
import Navbar from "./Components/Parts/Navbar";
import AskQuestion from "./Components/Route/AskQuestion";
import Error from "./Components/Route/Error";



const App = () => {

    return (
        <>
            <Navbar />
            <Switch>
                <Route path="/" component={Homepage} exact />
                <Route path="/askQuestion" component={AskQuestion} exact />
                <Route component={Error} />
            </Switch>
        </>
    )
}
export default App 