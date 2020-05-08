import React from 'react';
import './App.css';
import './bootstrap.min.css'
import Nav from "./components/Nav";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Search from "./components/Search";
import Home from "./components/Home";
import About from "./components/About";
import Detail from "./components/Detail";
import Post from "./components/Post";


function App() {
    return (
        <Router>
            <Nav className="App"/>
            <div className="container-fluid">
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route path="/search" component={Search}/>
                    <Route path="/detail/:id" component={Detail}/>
                    <Route path="/about" component={About}/>
                    <Route path="/post" component={Post}/>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
