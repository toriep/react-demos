import React from 'react';
import '../assets/css/app.css';
import {Route,Link} from 'react-router-dom';
import Home from './home';
import About from './about';
import Articles from './articles';


const App = () => (
            <div>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/articles">Articles</Link>   
                    </li>
                </ul>
                <Route exact path="/" component={Home} />
                <Route path="/about" component={About} />
                <Route path="/articles" component={Articles} />
            </div>
);

export default App;
