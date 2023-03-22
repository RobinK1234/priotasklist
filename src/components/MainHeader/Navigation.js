import React from 'react';

import AuthContext from "../../store/auth-context";
import classes from './Navigation.module.css';

const Navigation = () => {
    return (
        <AuthContext.Consumer>
            {(context) => {
                return (
                    <nav className={classes.nav}>
                        <ul>
                            {context.isLoggedIn && (
                                <li>
                                    <button onClick={context.onLogout}>Logout</button>
                                </li>
                            )}
                        </ul>
                    </nav>
                )
            }
            }
        </AuthContext.Consumer>

    );
};

export default Navigation;
