import React from 'react';
//put your css before the other main css so yours overrides
import 'materialize-css/dist/css/materialize.min.css'
// bootstrapp css would be the same pattern  from node modules folder
import '../assets/css/app.scss';


const App = () => (
    <div className="container">
        <h1 className='center'>Auth App Demo</h1>
        
    </div>
);

export default App;


//order of the css files matters