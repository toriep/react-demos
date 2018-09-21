import React from 'react';
import '../assets/css/app.css';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom';
import Home from './home';
import About from './about';
import Articles from './articles';
import First from './articles/article-1';
import Second from './articles/article-2';
import Third from './articles/article-3';


const App = () => {
    return (
        <Router>
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
        </Router>
    )
};

export default App;
