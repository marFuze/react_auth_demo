import React from 'react';
import 'materialize-css/dist/js/materialize.min';
//put your css before the other main css so yours overrides
import 'materialize-css/dist/css/materialize.min.css'
// bootstrapp css would be the same pattern  from node modules folder
import '../assets/css/app.scss';
import {Route} from 'react-router-dom';
import Home from './home';
import SignUp from './sign_up';


const App = () => (
    <div className="container">
        <Route path="/" exact component={Home}/>
        <Route path="/sign-up" component={SignUp}/>
    </div>
);

export default App;


//order of the css files matters