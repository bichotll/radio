var React = window.React = require('react'),
    ReactDOM = require("react-dom"),
    SongList = require("./ui/SongList"),
    SongView = require("./ui/SongView"),
    mountNode = document.getElementById("app");
import { Router, Route, IndexRedirect, IndexLink, Link, hashHistory } from 'react-router';

var App = React.createClass({
    render(){
        return (
            <div>
                <div className="header">
                    <nav className="navbar navbar-default navbar-fixed-top">
                        <div className="container">

                            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                                <ul className="nav navbar-nav">
                                    <li><IndexLink to="/" activeClassName="active">Home</IndexLink></li>
                                </ul>
                            </div>

                        </div>
                    </nav>
                </div>

                <div id="content">
                    {this.props.children}
                </div>
            </div>
        );
    }
});

ReactDOM.render((
    <Router history={hashHistory}>
        <Route path="/" component={App}>
            <IndexRedirect to="songs/featured" component={SongList}/>
            <Route path="songs/featured" component={SongList}/>
            <Route path="songs/:id" component={SongView}/>
        </Route>
    </Router>
), mountNode);
