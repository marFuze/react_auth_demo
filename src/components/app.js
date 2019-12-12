import React from 'react';
//put your css before the other main css so yours overrides
// bootstrapp css would be the same pattern  from node modules folder
import '../assets/css/app.scss';
import 'materialize-css/dist/js/materialize.min';
import 'materialize-css/dist/css/materialize.min.css';
import { Route } from 'react-router-dom';
import AboutUs from './about_us'
import Home from './home';
import Nav from './nav';
import SecretList from './secret_list';
import SignIn from './sign_in';
import SignUp from './sign_up';
import SecretData from './secret_data';
import auth from '../hoc/auth';


const App = () => (
    <div>
        <Nav />
        
        <div className="container">
            <Route path="/" exact component={Home} />
            <Route path="/about-us" component={AboutUs} />
            <Route path="/secret-list" component={auth(SecretList)} />
            <Route path="/sign-in" component={SignIn} />
            <Route path="/sign-up" component={SignUp} />
            <Route path="/secret-data" component={auth(SecretData)} />
        </div>
    </div>
);

export default App;


//order of the css files matters