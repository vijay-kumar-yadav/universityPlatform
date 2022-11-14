import React from "react";
import Homepage from "./Components/Route/Homepage";
import { Route, Switch } from "react-router-dom";
import Navbar from "./Components/Parts/Navbar";
import AskQuestion from "./Components/Route/AskQuestion";
import Error from "./Components/Route/Error";
// import AnswerQuestion from "./Components/Parts/AnswerQuestion"
import "./App.css"
import { AuthProvider } from "./Components/Contexts/AuthContext";
import Signup from "./Components/Parts/Signup";
import Login from "./Components/Parts/Login";
import ForgotPassword from "./Components/Parts/ForgetPassword";
// import PrivateRoute from "./Components/Route/PrivateRoute";
import UpdateProfile from "./Components/Parts/UpdateProfile";
import AnswerQuestion from "./Components/Parts/AnswerQuestion";


const App = () => {

    return (
        <>
            <AuthProvider>

                <Navbar />
                {/* <AnswerQuestion /> */}
                <Switch>
                    <Route path="/" component={Homepage} exact />
                    <Route path="/askQuestion" component={AskQuestion} exact />
                    <Route path="/signup" component={Signup} />
                    <Route path="/updateProfile" component={UpdateProfile} />
                    <Route path="/login" component={Login} />
                    <Route path="/forgot-password" component={ForgotPassword} />
                    <Route path="/answerQuestion" component={AnswerQuestion} />
                    <Route component={Error} />
                </Switch>
            </AuthProvider>
        </>
    )
}
export default App 