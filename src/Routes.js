import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

//CONTAINERS
import Usuarios from './Containers/Usuarios';
import FormUsuario from './Containers/FormUsuario';

const AppRoutes = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={Usuarios} ></Route>
                <Route exact path="/nuevoUsuario" component={FormUsuario} ></Route>
                <Route exact path="/editarUsuario/:id" component={FormUsuario} ></Route>

            </Switch>
        </Router>
    )
}

export default AppRoutes