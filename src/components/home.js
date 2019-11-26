import React from 'react';
import { Link } from 'react-router-dom';

export default props => (
<div>
    <h1 className="center">Welcome to Our App</h1>
    <div className="center">
        <Link to="/sign-up" className="btn blue">Sign Up</Link>
    </div>
</div>
)
    
