import React,{Component} from 'react';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom';
import First from './articles/article-1';
import Second from './articles/article-2';
import Third from './articles/article-3';

export default () =>  {
    return(
        <div>
            <ul>
                <li><Link to="/articles/arti-1">Article 1</Link></li>
                <li><Link to="/articles/arti-2">Article 2</Link></li>
                <li><Link to="/articles/arti-3">Article 3</Link></li>
            </ul>
            <Route path="/articles/arti-1" component={First} />
            <Route path="/articles/arti-2" component={Second} />
            <Route path="/articles/arti-3" component={Third} />
        </div>
    )
};
