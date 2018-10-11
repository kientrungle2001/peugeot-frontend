import React, { Component } from 'react';
import Axios from 'axios';
import {peugeot_api_url} from 'peugeot_constants';
import {Link} from 'react-router-dom';
var $ = window.jQuery;
class ModulePeugeotAccessariesCarousel extends Component {
    componentDidMount() {
        var that = this;
        Axios.get(peugeot_api_url + '/catalog_categories?_start=0&_end=100&type=auto&parent_id=12').then(function(resp){
            that.state = {
                items: resp.data
            };
            that.setState(that.state);
            var $owl = $('.owl-carousel');
            $owl.trigger('destroy.owl.carousel');
            // After destory, the markup is still not the same with the initial.
            // The differences are:
            //   1. The initial content was wrapped by a 'div.owl-stage-outer';
            //   2. The '.owl-carousel' itself has an '.owl-loaded' class attached;
            //   We have to remove that before the new initialization.
            $owl.html($owl.find('.owl-stage-outer').html()).removeClass('owl-loaded');
            $owl.owlCarousel({
                // your initial option here, again.
            });
        }).catch(function(err){
            console.log(err);
        });
    }
    render() {
        return (
            <div className="section-full bg-img-fix dlab-new-work overlay-white-dark">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-3 col-sm-4  p-a0 no-of-item">
                            <div className="no-of-item-dtl">
                                <img src="/img/Peugeot-logo.png" alt="Peugeot Logo" className="img-fluid" />
                                <h3>Phụ tùng theo xe</h3>
                            </div>
                        </div>
                        <div className="col-md-9 col-sm-8 p-a0">
                            <div className="new-item owl-btn-style-1 owl-carousel">
                                {this.state? this.state.items.map(function(item, key){
                                    return (
                                        <div className="item dlab-new-item" key={key}>
                                            <div className="dlab-box">
                                                <div className="dlab-media">
                                                    <Link to={"/category/product/" + item.id + "/" + item.alias}><img src={item.image} alt={item.title} /></Link>
                                                </div>
                                                <div className="dlab-info">
                                                    <p className="event-date">Phụ tùng</p>
                                                    <h4 className="dlab-title"><Link to={"/category/product/" + item.id + "/" + item.alias}>{item.title} <i className="fa fa-angle-right pull-right"></i></Link></h4>
                                                </div>
                                            </div>
                                        </div>
                                    );
                                }): ''}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ModulePeugeotAccessariesCarousel;