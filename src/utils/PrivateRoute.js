import { useContext } from "react";
import { Redirect, Route } from "react-router";
import { TravelersContext } from "../App";

function PrivateRoute({ children, ...rest }) {
    const { loggedInUser } = useContext(TravelersContext)

    return (
        <Route
            {...rest}
            render={({ location }) =>
                loggedInUser ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: "/auth",
                            state: { from: location }
                        }}
                    />
                )
            }
        />
    );
}


export default PrivateRoute