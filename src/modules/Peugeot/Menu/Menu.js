import React, { Component } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';
import {peugeot_api_url} from 'peugeot_constants';
var menu_items = null;
var menu_item_handler = null;
function notify_menu_items() {
    if(menu_item_handler) {
        menu_item_handler();
    }
}
function listen_menu_items(callback) {
    menu_item_handler = callback;
}
axios.get(peugeot_api_url + '/catalog_categories?_start=0&_end=100&type=menu-item&parent_id=5').then(function (resp) {
    menu_items = resp.data;
    notify_menu_items();
}).catch(function (err) {
    console.log(err);
});

class ModulePeugeotMenu extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        var that = this;
        if (null !== menu_items) {
            that.state = {
                items: menu_items
            };
            that.setState(that.state);
        } else {
            listen_menu_items(function () {
                that.state = {
                    items: menu_items
                };
                that.setState(that.state);
            });
        }
    }
    getActiveClass(item) {
        return item.link === window.location.pathname ? 'nav-item active' : 'nav-item';
    }
    render() {
        return (
            <nav className="navbar navbar-expand-md navbar-dark bg-transparent sticky-header">
                <div className="container">
                    <a className="navbar-brand" href="#"><img src="/img/logo_small.png" /></a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarCollapse">
                        <div className="mr-auto"></div>
                        <ul className="navbar-nav">
                            {
                                (this.state && this.state.items) ? 
                                this.state.items.map((item, i)=>{
                                    return (
                                        <li key={i} className={this.getActiveClass(item)}>
                                            {item.link == '/home' ? <a className="nav-link" href={item.link} title={item.title}>{item.title} </a>:<Link className="nav-link" to={item.link} title={item.title}>{item.title} </Link>}
                                        </li>
                                    );
                                }) : ''
                                
                            
                            }
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}

export default ModulePeugeotMenu;